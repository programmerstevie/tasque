import { ipcMain, BrowserWindow } from 'electron';

export enum WindowAction {
  CLOSE = 'CLOSE',
  MINIMIZE = 'MINIMIZE',
  MAXIMIZE = 'MAXIMIZE',
}

export const addWindowActionHandlers = () => {
  ipcMain.handle(
    'WINDOW_ACTION',
    (event, action: WindowAction, windowId?: number) => {
      const window: BrowserWindow | null =
        typeof windowId === 'number'
          ? BrowserWindow.fromId(windowId)
          : BrowserWindow.fromWebContents(event.sender);

      if (window === null) {
        // DO NOTHING
        return;
      }

      switch (action) {
        case WindowAction.CLOSE:
          window.close();
          break;
        case WindowAction.MINIMIZE:
          window.minimize();
          break;
        case WindowAction.MAXIMIZE:
          window.maximize();
          break;
      }
    }
  );
};
