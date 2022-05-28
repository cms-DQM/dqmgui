from asyncio import subprocess
from alarm_system import State, get_plot_data, filter_alarm_plots, send_email_message, format_message, send_sound, execute, run_deamon

import unittest
from unittest.mock import Mock, call, patch

def mock_function(*args):
    pass

class TestAlarmSystemState(unittest.TestCase):
    def test_initialize(self):
        state = State(3)
        self.assertEqual(set(), state.previous_plots)
        self.assertEqual(3, state.rebroadcast_count)

    def test_reset_rebroadcast_count(self):
        state = State(3)
        state.rebroadcast_count = 5
        state.reset_rebroadcast_count()
        self.assertEqual(3, state.rebroadcast_count)
    
    def test_set_previous_plots(self):
        state = State(3)
        self.assertEqual(set(), state.previous_plots)
        state.set_previous_plots(set(['plot1', 'plot2', 'plot3']))
        self.assertEqual(set(['plot1', 'plot2', 'plot3']), state.previous_plots)

    def test_decrease_rebroadcast_count(self):
        state = State(3)
        self.assertEqual(3, state.rebroadcast_count)
        state.decrease_rebroadcast_count()
        self.assertEqual(2, state.rebroadcast_count)
        state.decrease_rebroadcast_count()
        self.assertEqual(1, state.rebroadcast_count)
        state.decrease_rebroadcast_count()
        self.assertEqual(0, state.rebroadcast_count)
        state.decrease_rebroadcast_count()
        self.assertEqual(0, state.rebroadcast_count)
        state.decrease_rebroadcast_count()


@patch('alarm_system.DATA_URL', 'http://localhost:3000/data')
@patch('alarm_system.ERROR_QT_STATUS', [300])
@patch('alarm_system.EMAIL_ADDRESSES', ['user1@email.com', 'user2@email.com'])
@patch('alarm_system.EMAIL_SUBJECT', '{error_text} title {hostname}')
@patch('alarm_system.EMAIL_TEMPLATE', 'template {message}')
@patch('alarm_system.REMINDER_REBROADCAST_COUNT', 3)
@patch('alarm_system.INITIAL_WAIT', 5)
@patch('alarm_system.EXECUTION_INTERVAL', 50)
@patch('alarm_system.start_manager_gui', mock_function)
class TestAlarmSystem(unittest.TestCase):
    @patch('urllib.request.urlopen')
    @patch('time.time')
    def test_get_plot_data(self, mock_time, mock_urlopen):
        mock_time.return_value = 1234.56
        mock_urlopen_response = Mock()
        mock_urlopen.return_value = mock_urlopen_response
        mock_urlopen_response.read.return_value = '{"data":[{"key1":"value1"},{"key2":"value2"}]}'
        result = get_plot_data()
        mock_urlopen.assert_called_with('http://localhost:3000/data?notOlderThan=1234')
        self.assertEqual(result, {'data': [{ 'key1': 'value1' }, { 'key2': 'value2' }]})

    @patch('urllib.request.urlopen')
    def test_get_plot_raise_exception(self, mock_urlopen):
        mock_urlopen.side_effect = Exception()
        with self.assertRaises(Exception):
            get_plot_data()
    
    def test_filter_alarm_plots_return_empty_set(self):
        plot_data = None
        result = filter_alarm_plots(plot_data, set())
        self.assertEqual(set(), result)
        plot_data = {}
        result = filter_alarm_plots(plot_data, set())
        self.assertEqual(set(), result)
    
    def test_filter_alarm_plots_return_only_alarm_plots(self):
        plot_data = {
            'data': [
                {
                    'path': 'folder/plot1',
                    'qtstatuses': [70], 
                },
                {
                    'path': 'folder/plot2',
                    'qtstatuses': [70, 300], 
                },
                {
                    'path': 'folder/plot3',
                    'qtstatuses': [300], 
                },
                {
                    'path': 'folder/plot4',
                    'qtstatuses': [200, 100], 
                },
            ]
        }
        result = filter_alarm_plots(plot_data, set())
        self.assertEqual(set(['folder/plot2', 'folder/plot3']), result)

    def test_filter_alarm_plots_ignore_disabled_plots(self):
        plot_data = {
            'data': [
                {
                    'path': 'folder/plot1',
                    'qtstatuses': [70], 
                },
                {
                    'path': 'folder/plot2',
                    'qtstatuses': [70, 300], 
                },
                {
                    'path': 'folder/plot3',
                    'qtstatuses': [300], 
                },
            ]
        }
        result = filter_alarm_plots(plot_data, {'folder/plot2'})
        self.assertEqual(set(['folder/plot3']), result)

    @patch('subprocess.Popen')
    @patch('socket.gethostname')
    def test_send_email_message(self, mock_gethostname, mock_popen):
        mock_process = Mock()
        mock_process_write = Mock()
        mock_process_close = Mock()
        mock_process.stdin.write = mock_process_write
        mock_process.stdin.close = mock_process_close
        mock_process.wait.return_value = 0
        mock_popen.return_value = mock_process
        mock_gethostname.return_value = 1234

        send_email_message('message')
        expected_header = 'To: user1@email.com, user2@email.com\nSubject:  title 1234\n\n'.encode()
        expected_body = 'template message'.encode()
        expected_calls = [call(expected_header), call(expected_body)]
        mock_popen.assert_called_with('/usr/sbin/sendmail -t', shell=True, stdin=subprocess.PIPE)
        mock_process_write.assert_has_calls(expected_calls)
        mock_process_close.assert_called_once()

    @patch('subprocess.Popen')
    def test_send_email_message_with_error_exit_code(self, mock_popen):
        mock_process = Mock()
        mock_process.wait.return_value = -1
        mock_popen.return_value = mock_process

        with self.assertRaises(Exception):
            send_email_message('message')
    
    def test_format_message(self):
        def verify(plots, previous_plots, is_reminder, expected_spoken_message, expected_message):
            actual_spoken_message, actual_message = format_message(plots, previous_plots, is_reminder)
            self.assertEqual(actual_spoken_message, expected_spoken_message)
            self.assertEqual(actual_message, expected_message)

        plots = set(['plot1', 'plot2'])
        previous_plots = set(['plot3'])
        is_reminder = False
        expected_spoken_message = 'There are 2 D Q M alarms. Check plots in the D Q M Error folder.'
        expected_message = 'There are 2 DQM alarms.\n\nAlarm names are:\n  (new) plot1\n  (new) plot2\n'
        verify(plots, previous_plots, is_reminder, expected_spoken_message, expected_message)
        
        plots = set(['plot1', 'plot2'])
        previous_plots = set(['plot3'])
        is_reminder = True
        expected_spoken_message = 'Reminder. There are 2 D Q M alarms. Check plots in the D Q M Error folder.'
        expected_message = 'Reminder. There are 2 DQM alarms.\n\nAlarm names are:\n  (new) plot1\n  (new) plot2\n'
        verify(plots, previous_plots, is_reminder, expected_spoken_message, expected_message)
        
        plots = set(['plot2', 'plot1'])
        previous_plots = set(['plot2'])
        is_reminder = False
        expected_spoken_message = 'There are 2 D Q M alarms. Check plots in the D Q M Error folder.'
        expected_message = 'There are 2 DQM alarms.\n\nAlarm names are:\n  (new) plot1\n  plot2\n'
        verify(plots, previous_plots, is_reminder, expected_spoken_message, expected_message)
        
        plots = set(['plot1'])
        previous_plots = set(['plot1'])
        is_reminder = True
        expected_spoken_message = 'Reminder. There is one D Q M alarm. Check plots in the D Q M Error folder.'
        expected_message = 'Reminder. There is one DQM alarm.\n\nAlarm names are:\n  plot1\n'
        verify(plots, previous_plots, is_reminder, expected_spoken_message, expected_message)
        
    @patch('alarm_system.SOUND_SERVER_URL', 'http://localhost')
    @patch('alarm_system.SOUND_SERVER_PORT', 4000)
    @patch('alarm_system.SOUND_MESSAGE_BODY', '<body>{spoken_message},{message}<body>')
    @patch('alarm_system.EMAIL_MESSAGE_BODY', 'email {spoken_message},{message}')
    @patch('alarm_system.send_email_message')
    @patch('socket.socket')
    def test_send_sound(self, mock_socket, mock_send_email_message):
        mock_socket_instance = Mock()
        mock_socket_instance.recv.return_value = 'All ok\n'
        mock_socket.return_value = mock_socket_instance

        send_sound('spoken_message', 'message')
        mock_socket_instance.connect.assert_called_with(('http://localhost', 4000))
        mock_socket_instance.send.assert_called_with('<body>spoken_message,message<body>')
        mock_socket_instance.recv.assert_called_with(1024)
        mock_socket_instance.close.assert_called_once()
        mock_send_email_message.assert_called_with('email spoken_message,message')

    @patch('socket.socket')
    def test_send_sound_with_error_returned_data(self, mock_socket):
        mock_socket_instance = Mock()
        mock_socket_instance.recv.return_value = 'Error\n'
        mock_socket.return_value = mock_socket_instance

        with self.assertRaises(Exception):
            send_sound('spoken_message', 'message')

    @patch('sys.exit')
    @patch('alarm_system.send_email_message')
    @patch('alarm_system.format_message')
    @patch('alarm_system.send_sound')
    @patch('alarm_system.get_plot_data')
    def test_execute(self, mock_get_plot_data, mock_send_sound, mock_format_message, mock_send_email, mock_exit):
        state = State(3)
        def setup_mock(plot_data, previous_plot=set(), rebroadcast_count=3):
            mock_get_plot_data.reset_mock()
            mock_send_sound.reset_mock()
            mock_format_message.reset_mock()
            mock_format_message.return_value = (None, None)
            state.rebroadcast_count = rebroadcast_count
            state.previous_plots = previous_plot
            mock_get_plot_data.return_value = plot_data
            execute(state)

        # case 1: empty plot data 
        setup_mock({})
        self.assertEqual(set(), state.previous_plots)
        self.assertEqual(3, state.rebroadcast_count)
        mock_send_sound.assert_not_called()
        mock_format_message.assert_not_called()

        # case 2: empty alarm plot
        plot_data = {'data': [{'path': 'plot_no_error', 'qtstatuses': [50]}]}
        setup_mock(plot_data, previous_plot={'plot1'})
        self.assertEqual(set(), state.previous_plots)
        self.assertEqual(3, state.rebroadcast_count)
        mock_send_sound.assert_not_called()
        mock_format_message.assert_not_called()

        # case 3: new alarm plots
        plot_data = {'data': [
            {'path': 'plot1', 'qtstatuses': [300]},
            {'path': 'plot2', 'qtstatuses': [300, 80]}
        ]}
        setup_mock(plot_data, previous_plot={'plot1'}, rebroadcast_count=2)
        self.assertSetEqual({'plot1', 'plot2'}, state.previous_plots)
        self.assertEqual(3, state.rebroadcast_count)
        mock_send_sound.assert_called_once()
        mock_format_message.assert_called_once()

        # case 4: same alarm plots as the previous plot
        plot_data = {'data': [
            {'path': 'plot1', 'qtstatuses': [300]},
            {'path': 'plot2', 'qtstatuses': [300, 80]}
        ]}
        setup_mock(plot_data, previous_plot={'plot1', 'plot2'}, rebroadcast_count=2)
        self.assertSetEqual({'plot1', 'plot2'}, state.previous_plots)
        self.assertEqual(1, state.rebroadcast_count)
        mock_send_sound.assert_called_once()
        mock_format_message.assert_called_once()

        # case 5: same alarm plots as the previous plot, but rebroadcast count reach the limit
        plot_data = {'data': [
            {'path': 'plot1', 'qtstatuses': [300]},
            {'path': 'plot2', 'qtstatuses': [300]}
        ]}
        setup_mock(plot_data, previous_plot={'plot1', 'plot2'}, rebroadcast_count=0)
        self.assertSetEqual({'plot1', 'plot2'}, state.previous_plots)
        self.assertEqual(0, state.rebroadcast_count)
        mock_send_sound.assert_not_called()
        mock_format_message.assert_not_called()

        # case 6: users use keyboard interrupt
        mock_get_plot_data.reset_mock()
        mock_send_sound.reset_mock()
        mock_format_message.reset_mock()
        mock_get_plot_data.side_effect = KeyboardInterrupt()
        execute(State(3))
        mock_send_sound.assert_not_called()
        mock_format_message.assert_not_called()
        mock_send_email.assert_not_called()
        mock_exit.assert_called_once()

        # case 7: the exception was raised
        mock_get_plot_data.reset_mock()
        mock_send_sound.reset_mock()
        mock_format_message.reset_mock()
        mock_get_plot_data.side_effect = Exception('error')
        execute(State(3))
        mock_send_sound.assert_not_called()
        mock_format_message.assert_not_called()
        mock_send_email.assert_called_with('error', is_error=True)

    @patch('alarm_system.execute')
    @patch('itertools.count')
    @patch('time.sleep')
    def test_run_deamon(self, mock_sleep, mock_count, mock_execute):
        mock_count.return_value = [0]
        run_deamon()
        mock_sleep.assert_has_calls([call(5), call(50)])
        mock_execute.assert_called_once()

if __name__ == '__main__':
    unittest.main()