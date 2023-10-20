import { BrowserWindow } from 'electron/main';
import {
  MAIN_WINDOW_CONSTRUCTOR_OPTIONS,
  MAIN_WINDOW_WEBPACK_ENTRY,
} from './const';
import { addWindowActionHandlers } from './controller/window_action';

export class MainWindowState {
  _browser_window!: BrowserWindow;

  createMainWindow() {
    const browser_window = new BrowserWindow(MAIN_WINDOW_CONSTRUCTOR_OPTIONS);

    this._browser_window = browser_window;

    browser_window
      .loadURL(MAIN_WINDOW_WEBPACK_ENTRY)
      .then(() => {
        browser_window.once('ready-to-show', () => {
          browser_window.show();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  constructor() {
    this.createMainWindow();
  }
}

export class ApplicationState {
  private static _mainWindow: MainWindowState | null = null;

  private constructor() {}

  /**
   * initialize
   */
  static init() {
    ApplicationState._mainWindow = new MainWindowState();

    addWindowActionHandlers();
  }

  static get mainWindowRaw(): BrowserWindow | null {
    if (ApplicationState._mainWindow === null) {
      return null;
    }
    return ApplicationState._mainWindow._browser_window;
  }

  static createMainWindow() {}
}
