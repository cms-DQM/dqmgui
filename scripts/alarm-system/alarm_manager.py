import http.server
import socketserver
import logging
from state import State

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


def run_alarm_manager(state: State, execution_interval, port):
    def render_content():
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

    class AlarmManagerHttpRequestHandler(http.server.SimpleHTTPRequestHandler):
        def do_GET(self):
            self.send_response(200)
            self.send_header("Content-type", "text/html")
            self.end_headers()
            with open('index.html') as f:
                html = f.read()
                content = render_content()
                html = html.replace('/*{{execution_interval}}*/', str(execution_interval * 1000))
                html = html.replace('{{content}}', content)
                self.wfile.write(html.encode())
                return

        def do_POST(self):
            print(self.path)
            if self.path.startswith('/enable?me='):
                path = self.path.split('/enable?me=', 1)[1]
                state.enable_alarm(path)
                self.send_response(200)
                self.end_headers()
                self.wfile.write(path.encode())

            elif self.path.startswith('/disable?me='):
                path = self.path.split('/disable?me=', 1)[1]
                print(path)
                state.disable_alarm(path)
                self.send_response(200)
                self.end_headers()
                self.wfile.write(path.encode())
            
            else:
                self.send_response(404)
                self.end_headers()
                self.wfile.write('<h1>404 Not Found</h1>'.encode())

    handler_object = AlarmManagerHttpRequestHandler
    manager_server = socketserver.TCPServer(("", port), handler_object)
    logging.info(f'Starting Alarm Manager at port: {port}')
    manager_server.serve_forever()