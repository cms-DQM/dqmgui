import http.server
import socketserver
import logging
from state import State
from config import Config, get_config

logging.basicConfig(
    format='%(process)s %(asctime)s %(levelname)s: %(message)s',
    datefmt='%d/%m/%y %H:%M:%S',
    level=logging.INFO
)

STATUSES = {
    30: 'OTHER',
    50: 'DISABLED',
    60: 'INVALID',
    70: 'INSUF_STAT',
    90: 'DID_NOT_RUN',
    100: 'STATUS_OK',
    200: 'WARNING',
    300: 'ERROR',
}


def run_alarm_manager(state: State):
    '''
    Run alarm manager GUI.
    Start a http server to serve HTML GUI website and handle requests from the client
    '''

    def render_configuration():
        '''
        Render HTML configuration section including enable/disable sound and email sending functionality
        '''
        content = ''
        enable_button = lambda config, currently_enabled: f'<button onclick="set_config(\'{config}\', {"false" if currently_enabled else "true"})">{"Disable" if currently_enabled else "Enable"}</button>'
        status = lambda currently_enabled: f'<span class="{"success" if currently_enabled else "danger"}">{"Active" if currently_enabled else "Disabled"}</span>'

        content += f'<p>{enable_button("sound", state.sound_enabled)} Sound Sending Status: {status(state.sound_enabled)}</p>'
        content += f'<p>{enable_button("email", state.email_enabled)} Email Sending Status: {status(state.email_enabled)}</p>'
        return content

    def render_configuration_list():
        '''
        Render HTML configuration list that shows all the config variable
        '''
        content = '<table>'
        for key, value in get_config().items():
            content += f'<tr><td>{key}</td><td>{value}</td></tr>'
        content += '</table>'
        return content

    def render_content():
        '''
        Render HTML plots table with enable/disable button for each plot
        '''
        content = ''
        for plot in state.plot_data.get('data', []):
            path = plot['path']
            statuses = plot["qtstatuses"]
            status = ','.join(STATUSES[s] for s in statuses) if statuses else 'Unknown'
            content += '<tr>'
            content += f'<td>{path}</td>'
            content += f'<td>{plot["name"]}</td>'
            content += f'<td>{status}</td>'
            if state.is_disabled_alarm(plot["path"]):
                content += '<td class="danger">Disabled</td>'
                content += f'<td><button onclick="enable(\'{path}\')">Enable</button></td>'
            else:
                content += '<td class="success">Active</td>'
                content += f'<td><button onclick="disable(\'{path}\')">Disable</button></td>'
            content += '</tr>'
        return content

    def render_logs():
        '''
        Render HTML log showed on the last section
        '''
        content = '<table>'
        for log in state.logs:
            iteration = f'#{log["no"]}'
            datetime = log['datetime']
            message = log['message']
            content += f'<tr><td>{iteration}</td><td>{datetime}</td><td>{message}</td></tr>'
        content += '</table>'
        content += f'<p>Show up to {Config.NUMBER_OF_DISPLAYED_LOG} recent logs</p>'
        return content

    class AlarmManagerHttpRequestHandler(http.server.SimpleHTTPRequestHandler):
        '''
        Request handler for alarm manager for serving HTML page and handle requests
        '''

        def do_GET(self):
            '''
            Serve HTML page content using index.html as a template
            '''
            self.send_response(200)
            self.send_header("Content-type", "text/html")
            self.end_headers()
            with open('index.html') as f:
                html = f.read()
                configuration = render_configuration()
                configuration_list = render_configuration_list()
                content = render_content()
                logs = render_logs()
                html = html.replace('/*{{execution_interval}}*/', str(Config.EXECUTION_INTERVAL * 1000))
                html = html.replace('{{content}}', content)
                html = html.replace('{{configuration}}', configuration)
                html = html.replace('{{configuration_list}}', configuration_list)
                html = html.replace('{{logs}}', logs)
                self.wfile.write(html.encode())
                return

        def do_POST(self):
            '''
            Handle state changing logic from the client including enable/disable plot alarms and configurations
            '''
            if self.path.startswith('/enable?me='):
                path = self.path.split('/enable?me=', 1)[1]
                state.enable_alarm(path)
                state.log(f'Enable plot: {path}')
                self.success(path)
            elif self.path.startswith('/disable?me='):
                path = self.path.split('/disable?me=', 1)[1]
                state.disable_alarm(path)
                state.log(f'Disable plot: {path}')
                self.success(path)
            elif self.path.startswith('/config/sound/enable'):
                state.enable_sound()
                state.log(f'Set config: Sound sending: Active')
                self.success()
            elif self.path.startswith('/config/sound/disable'):
                state.disable_sound()
                state.log(f'Set config: Sound sending: Disabled')
                self.success()
            elif self.path.startswith('/config/email/enable'):
                state.enable_email()
                state.log(f'Set config: Email sending: Active')
                self.success()
            elif self.path.startswith('/config/email/disable'):
                state.disable_email()
                state.log(f'Set config: Email sending: Disabled')
                self.success()
            else:
                self.send_response(404)
                self.end_headers()
                self.wfile.write('<h1>404 Not Found</h1>'.encode())
        
        def success(self, response=''):
            '''
            Success response
            '''
            self.send_response(200)
            self.end_headers()
            self.wfile.write(response.encode())

    handler_object = AlarmManagerHttpRequestHandler
    manager_server = socketserver.TCPServer(("", Config.ALARM_MANAGER_PORT), handler_object)
    logging.info(f'Starting Alarm Manager at port: {Config.ALARM_MANAGER_PORT}')
    manager_server.serve_forever()