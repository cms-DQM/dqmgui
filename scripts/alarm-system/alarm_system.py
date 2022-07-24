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
from config import Config

logging.basicConfig(
    format='%(process)s %(asctime)s %(levelname)s: %(message)s',
    datefmt='%d/%m/%y %H:%M:%S',
    level=logging.INFO
)

def get_plot_data() -> dict:
    current_timestamp = time.time()
    query_string = f'?notOlderThan={str(current_timestamp).split(".")[0]}'
    request_url = f'{Config.DATA_URL}{query_string}'
    response_body = urllib.request.urlopen(request_url).read()
    plot_data = json.loads(response_body)
    return plot_data

def filter_alarm_plots(plot_data: dict, disabled_alarms: Set) -> Set[str]:
    if not plot_data or 'data' not in plot_data:
        logging.info('No plot data found. Skip this execution iteration.')
        return set()
    alarm_plots = set()
    logging.info(f'Total plot data: {len(plot_data["data"])} plots')
    for plot in plot_data['data']:
        plot_path = plot['path']
        if plot_path in disabled_alarms:
            continue
        plot_qt_statuses = plot['qtstatuses']
        if set(Config.ERROR_QT_STATUS).intersection(plot_qt_statuses):
            alarm_plots.add(plot_path)
    return alarm_plots

def send_email_message(state: State, message: str, is_error: bool=False):
    if not state.email_enabled:
        logging.info('Email sending is disabled.')
        return
    error_text = 'ERROR ' if is_error else ''
    participants = f'To: {", ".join(Config.EMAIL_ADDRESSES)}\n'
    subject = f'Subject: {Config.EMAIL_SUBJECT.format(error_text=error_text, hostname=socket.gethostname())}\n'
    header = f'{participants}{subject}\n'.encode()
    body = Config.EMAIL_TEMPLATE.format(message=message).encode()
    
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

def send_sound(state: State, spoken_message: str, message: str):
    if not state.sound_enabled:
        logging.info('Sound sending is disabled.')
        return
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.connect((Config.SOUND_SERVER_URL, Config.SOUND_SERVER_PORT))
    s.send(Config.SOUND_MESSAGE_BODY.format(spoken_message=spoken_message, message=message))
    data = s.recv(1024)
    s.close()
    if data == 'All ok\n':
        logging.info(f'Broadcasted message: {message}')
        send_email_message(state, Config.EMAIL_MESSAGE_BODY.format(spoken_message=spoken_message, message=message))
    else:
        raise Exception(f'Unexpected answer from CMS-WOW: {repr(data)}')

def execute(state: State):
    log_message = ''
    try:
        plot_data = get_plot_data()
        state.set_plot_data(plot_data)
        alarm_plots = filter_alarm_plots(plot_data, state.disabled_alarms)
        logging.info(f'Total alarm plots: {len(alarm_plots)} plots')
        if len(alarm_plots) == 0:
            state.set_previous_plots(set())
            state.reset_rebroadcast_count()
            log_message = 'Empty alarm plots'
        elif alarm_plots.difference(state.previous_plots):
            logging.info(f'Sending alarm.')
            spoken_message, message = format_message(alarm_plots, state.previous_plots, is_reminder=False)
            send_sound(state, spoken_message, message)
            state.set_previous_plots(alarm_plots)
            state.reset_rebroadcast_count()
            log_message = f'Sent new {len(alarm_plots)} alarm plots. sound: {state.sound_enabled}, email: {state.email_enabled}'
        elif state.rebroadcast_count > 0:
            logging.info(f'Sending reminder alarm')
            spoken_message, message = format_message(alarm_plots, state.previous_plots, is_reminder=True)
            send_sound(state, spoken_message, message)
            state.decrease_rebroadcast_count()
            log_message = f'Sent reminder {len(alarm_plots)} alarm plots. sound: {state.sound_enabled}, email: {state.email_enabled}'
        else:
            logging.info('Rebroadcast reach max limit.')
            log_message = 'Rebroadcast reach max limit.'
    except KeyboardInterrupt:
        log_message = 'Exit'
        state.log(log_message)
        raise KeyboardInterrupt()
    except Exception as error:
        traceback.print_exc()
        logging.error(str(error))
        send_email_message(state, str(error), is_error=True)
        log_message = f'ERROR: {str(error)}'
    finally:
        state.log(log_message)
        state.increase_no_iteration()
    return

def start_manager_gui(state: State) -> threading.Thread:
    thread = threading.Thread(target=run_alarm_manager, args=(state, ))
    logging.info("Starting alarm manager in separated thread")
    thread.daemon = True
    thread.start()
    return thread

def run_daemon():
    try:
        logging.info('Starting alarm system script.')
        state = State()
        start_manager_gui(state)
        time.sleep(Config.INITIAL_WAIT)
        for iteration in itertools.count():
            logging.info(f'Start the execution. Iteration: #{iteration}')
            execute(state)
            logging.info(f'Current execution finished. State: {state}')
            time.sleep(Config.EXECUTION_INTERVAL)
    except KeyboardInterrupt:
        logging.info('The script was terminated by user. Exit code: 0')
        sys.exit(0)

if __name__ == '__main__':
    run_daemon()

