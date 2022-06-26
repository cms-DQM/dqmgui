import time
import logging
from typing import Set, Tuple
import urllib.request
import json
import socket
import subprocess
import sys
import itertools
import traceback
import threading

from alarm_manager import run_alarm_manager
from state import State

# Connection config
GUI_API_URL = 'http://localhost'
GUI_API_PORT = 8889
# GUI_API_URL = 'http://127.0.0.1'
# GUI_API_PORT = 5000
GUI_API_ERROR_DATA_PATH = '/api/v1/archive/0/Global/Online/ALL/00%20Shift/Errors'
SOUND_SERVER_URL = None
SOUND_SERVER_PORT = None
ALARM_MANAGER_PORT = 8890

# Alarm system parameters
EMAIL_ENABLED = False
SOUND_ENABLED = False
REMINDER_REBROADCAST_COUNT = 3
EXECUTION_INTERVAL = 60 * 60 # seconds
INITIAL_WAIT = 2 # seconds
EMAIL_ADDRESSES = ['north1602@gmail.com']
ERROR_QT_STATUS = [300]

# Message content
SOUND_MESSAGE_BODY = (
    '<CommandSequence>' +
        '<alarm sender="DQM" sound="DQM_1.wav" talk="{spoken_message}">{message} Check plots in the DQM Error folder.</alarm>' +
    '</CommandSequence>'
)
EMAIL_MESSAGE_BODY = 'We (DQM) just played a sound in the control room.\nThe message we played was: {spoken_message}\n\n--\n{message}'
EMAIL_SUBJECT = '{error_text}Message from the DQM GUI alarm system on {hostname} at P5'
EMAIL_TEMPLATE = '{message}\n\nThe logs should be here: /data/srv/logs/dqmgui/online/\n'

DATA_URL = f'{GUI_API_URL}:{str(GUI_API_PORT)}{GUI_API_ERROR_DATA_PATH}'

logging.basicConfig(
    format='%(process)s %(asctime)s %(levelname)s: %(message)s',
    datefmt='%d/%m/%y %H:%M:%S',
    level=logging.INFO
)

def get_plot_data() -> dict:
    current_timestamp = time.time()
    query_string = f'?notOlderThan={str(current_timestamp).split(".")[0]}'
    request_url = f'{DATA_URL}{query_string}'
    response_body = urllib.request.urlopen(request_url).read()
    plot_data = json.loads(response_body)
    return plot_data

def filter_alarm_plots(plot_data: dict, disalbled_alarms: Set) -> Set[str]:
    if not plot_data or 'data' not in plot_data:
        logging.info('No plot data found. Skip this execution iteration.')
        return set()
    alarm_plots = set()
    logging.info(f'Total plot data: {len(plot_data["data"])} plots')
    for plot in plot_data['data']:
        plot_path = plot['path']
        if plot_path in disalbled_alarms:
            continue
        plot_qt_statuses = plot['qtstatuses']
        if set(ERROR_QT_STATUS).intersection(plot_qt_statuses):
            alarm_plots.add(plot_path)
    return alarm_plots

def send_email_message(message: str, is_error: bool=False):
    if not EMAIL_ENABLED:
        logging.info('Email sending is disabled.')
        return
    error_text = 'ERROR ' if is_error else ''
    participants = f'To: {", ".join(EMAIL_ADDRESSES)}\n'
    subject = f'Subject: {EMAIL_SUBJECT.format(error_text=error_text, hostname=socket.gethostname())}\n'
    header = f'{participants}{subject}\n'.encode()
    body = EMAIL_TEMPLATE.format(message=message).encode()
    
    process = subprocess.Popen('/usr/sbin/sendmail -t', shell=True, stdin=subprocess.PIPE)
    process.stdin.write(header)
    process.stdin.write(body)
    process.stdin.close()
    return_code = process.wait()
    
    if return_code != 0:
        raise Exception(f'Sendmail exit with status {return_code}')

def format_message(plots: Set[str], previous_plots: Set[str], is_reminder: bool) -> Tuple[str, str]:
    plots_length = len(plots)
    title_message = ''
    if is_reminder:
        title_message += 'Reminder. '
    if plots_length > 1:
        title_message += f'There are {plots_length} DQM alarms.'
    else:
        title_message += f'There is one DQM alarm.'

    detail_message = '\n\nAlarm names are:'
    for plot in sorted(plots):
        detail_message += '\n  '
        if plot not in previous_plots:
            detail_message += '(new) '
        detail_message += plot
    detail_message += '\n'

    spoken_message = f'{title_message} Check plots in the DQM Error folder.'.replace('DQM', 'D Q M')
    message = f'{title_message}{detail_message}'
    return spoken_message, message

def send_sound(spoken_message: str, message: str):
    if not SOUND_ENABLED:
        logging.info('Sound sending is disabled.')
        return
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.connect((SOUND_SERVER_URL, SOUND_SERVER_PORT))
    s.send(SOUND_MESSAGE_BODY.format(spoken_message=spoken_message, message=message))
    data = s.recv(1024)
    s.close()
    if data == 'All ok\n':
        logging.info(f'Broadcasted message: {message}')
        send_email_message(EMAIL_MESSAGE_BODY.format(spoken_message=spoken_message, message=message))
    else:
        raise Exception(f'Unexpected answer from CMS-WOW: {repr(data)}')

def execute(state: State):
    try:
        plot_data = get_plot_data()
        state.set_plot_data(plot_data)
        alarm_plots = filter_alarm_plots(plot_data, state.disabled_alarms)
        logging.info(f'Total alarm plots: {len(alarm_plots)} plots')
        if len(alarm_plots) == 0:
            state.set_previous_plots(set())
            state.reset_rebroadcast_count()
            return

        if alarm_plots.difference(state.previous_plots):
            logging.info(f'Sending alarm.')
            spoken_message, message = format_message(alarm_plots, state.previous_plots, is_reminder=False)
            send_sound(spoken_message, message)
            state.set_previous_plots(alarm_plots)
            state.reset_rebroadcast_count()
        elif state.rebroadcast_count > 0:
            logging.info(f'Sending reminder alarm')
            spoken_message, message = format_message(alarm_plots, state.previous_plots, is_reminder=True)
            send_sound(spoken_message, message)
            state.decrease_rebroadcast_count()
        else:
            logging.info('Rebroadcast reach max limit.')
        state.increase_no_iteration()
    except KeyboardInterrupt:
        raise KeyboardInterrupt()
    except Exception as error:
        traceback.print_exc()
        logging.error(str(error))
        send_email_message(str(error), is_error=True)
    return

def start_manager_gui(state: State) -> threading.Thread:
    thread = threading.Thread(target=run_alarm_manager, args=(state, EXECUTION_INTERVAL, ALARM_MANAGER_PORT))
    logging.info("Starting alarm manager in separated thread")
    thread.daemon = True
    thread.start()
    return thread

def run_daemon():
    try:
        logging.info('Starting alarm system script.')
        state = State(REMINDER_REBROADCAST_COUNT)
        start_manager_gui(state)
        time.sleep(INITIAL_WAIT)
        for iteration in itertools.count():
            logging.info(f'Start the execution. Iteration: #{iteration}')
            execute(state)
            logging.info(f'Current execution finished. State: {state}')
            time.sleep(EXECUTION_INTERVAL)
    except KeyboardInterrupt:
        logging.info('The script was terminated by user. Exit code: 0')
        sys.exit(0)

if __name__ == '__main__':
    run_daemon()

