import { type BrowserWindowConstructorOptions } from 'electron';

/**
 * @description Electron Forge "main_window" html entry point (forge.config.ts)
 * @example let mainWindow = new BrowserWindow(...);
    mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
 */
export declare const MAIN_WINDOW_WEBPACK_ENTRY: string;

/**
 * @description Electron Forge "main_window" preload entry point (forge.config.ts)
 */
export declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

/**
 * @description Electron BrowserWindow Constructor Options for Tasque Main Window
 * @example let mainWindow = new BrowserWindow(MAIN_WINDOW_CONSTRUCTOR_OPTIONS);
 */
export const MAIN_WINDOW_CONSTRUCTOR_OPTIONS: BrowserWindowConstructorOptions =
  {
    width: 343,
    height: 676,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
      sandbox: true,
      contextIsolation: true,
    },
    frame: false,
    show: false,
    resizable: false,
    alwaysOnTop: true,
  };
