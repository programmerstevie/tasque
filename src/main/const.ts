import { type BrowserWindowConstructorOptions } from 'electron';

/**
 * @description Electron Forge "main_window" preload entry point (forge.config.ts)
 * @desc WARNING!: Cannot be exported, must be re-declared in the file it's used in.
 */
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

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
