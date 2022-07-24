from typing import Set, Dict
from datetime import datetime

from config import Config

class State:
    previous_plots: Set[str]
    disabled_alarms: Set[str]
    rebroadcast_count: int
    plot_data: Dict
    no_iteration: int
    sound_enabled: bool

    def __init__(self) -> None:
        self.previous_plots = set()
        self.disabled_alarms = set()
        self.rebroadcast_count = Config.REMINDER_REBROADCAST_COUNT
        self.initial_rebroadcast_count = Config.REMINDER_REBROADCAST_COUNT
        self.plot_data = {'data': []}
        self.no_iteration = 0
        self.sound_enabled = Config.SOUND_ENABLED
        self.email_enabled = Config.EMAIL_ENABLED
        self.logs = []
    
    def __str__(self) -> str:
        return f'(plot_data length: {len(self.plot_data["data"])}, previous_plots length: {len(self.previous_plots)}, rebroadcast_count: {self.rebroadcast_count}, no_iteration: {self.no_iteration})'

    def reset_rebroadcast_count(self) -> None:
        self.rebroadcast_count = self.initial_rebroadcast_count

    def set_previous_plots(self, plots: Set[str]) -> None:
        self.previous_plots = plots

    def set_plot_data(self, plot_data: Dict) -> None:
        self.plot_data = plot_data
    
    def decrease_rebroadcast_count(self) -> None:
        self.rebroadcast_count = max(0, self.rebroadcast_count - 1)

    def increase_no_iteration(self) -> None:
        self.no_iteration += 1
    
    def disable_alarm(self, name) -> None:
        self.disabled_alarms.add(name)

    def enable_alarm(self, name) -> None:
        if name in self.disabled_alarms:
            self.disabled_alarms.remove(name)

    def is_disabled_alarm(self, name) -> bool:
        return name in self.disabled_alarms
    
    def enable_sound(self):
        self.sound_enabled = True

    def disable_sound(self):
        self.sound_enabled = False

    def enable_email(self):
        self.email_enabled = True

    def disable_email(self):
        self.email_enabled = False
    
    def log(self, message: str = ''):
        log_data = {
            'no': self.no_iteration,
            'datetime': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
            'message': message
        }
        self.logs.insert(0, log_data)
        print(self.logs)
        self.logs = self.logs[:Config.NUMBER_OF_DISPLAYED_LOG]