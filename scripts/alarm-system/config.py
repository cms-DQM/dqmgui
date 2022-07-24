import os

class Config:
    # Connection config
    GUI_API_URL = os.environ.get('GUI_API_URL')
    GUI_API_PORT = os.environ.get('GUI_API_PORT')
    GUI_API_ERROR_DATA_PATH = '/api/v1/archive/0/Global/Online/ALL/00%20Shift/Errors'
    SOUND_SERVER_URL = os.environ.get('SOUND_SERVER_URL')
    SOUND_SERVER_PORT = os.environ.get('SOUND_SERVER_PORT')
    ALARM_MANAGER_PORT = 8890

    # Alarm system parameters
    EMAIL_ENABLED = False
    SOUND_ENABLED = False
    REMINDER_REBROADCAST_COUNT = 3
    EXECUTION_INTERVAL = 60 * 60 # seconds
    INITIAL_WAIT = 2 # seconds
    EMAIL_ADDRESSES = os.environ.get('EMAIL_ADDRESSES', '').split(',')
    ERROR_QT_STATUS = [300]
    NUMBER_OF_DISPLAYED_LOG = 200

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

def get_config():
    return dict([(attribute, Config.__dict__.get(attribute)) for attribute in Config.__dict__ if not attribute.startswith('_')])