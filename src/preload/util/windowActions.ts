import { ipcRenderer } from 'electron';
import { WindowAction } from '../../main/controller/window_action';
import type { WindowActionApi } from '../types';

const invokeWindowAction = (action: WindowAction) => {
  void ipcRenderer.invoke('WINDOW_ACTION', action);
};

export const WindowActionsIPC: WindowActionApi = {
  closeWindow: function () {
    invokeWindowAction(WindowAction.CLOSE);
  },
  minimizeWindow: function () {
    invokeWindowAction(WindowAction.MINIMIZE);
  },
  maximizeWindow: function () {
    invokeWindowAction(WindowAction.MAXIMIZE);
  },
};
