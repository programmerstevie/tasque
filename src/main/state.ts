import { BrowserWindow, nativeImage, type NativeImage } from 'electron';
import { MAIN_WINDOW_CONSTRUCTOR_OPTIONS } from './const';
import { addWindowActionHandlers } from './controller/window_action';
import path from 'path';
import type { TasqueTool, ToolListEntryData } from '@api/types';
import { NEW_UTILS, type ToolData } from './tools';

const icon = nativeImage.createFromPath(
  path.resolve(__dirname, '../../static/Tasque List Icon x3.png')
);

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;

// Helper to configure BrowserWindow setup
const setupWindow = (window: BrowserWindow, icon: NativeImage) => {
  window.setAppDetails({
    appId: 'tasque_app',
    appIconPath: icon.toDataURL(),
  });
  window.setIcon(icon);
};

class MainWindowState {
  private _browserWindow!: BrowserWindow;
  private _toolList: number[] = [];

  constructor() {
    this.createMainWindow();
  }

  private createMainWindow() {
    const browserWindow = new BrowserWindow({
      ...MAIN_WINDOW_CONSTRUCTOR_OPTIONS,
    });
    this._browserWindow = browserWindow;

    setupWindow(browserWindow, icon);
    
    browserWindow.once('ready-to-show', () => browserWindow.show());

    browserWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY).catch((err) => {
      console.error('Failed to load main window URL:', err);
    });
  }

  get browserWindow() {
    return this._browserWindow;
  }
}

export class ApplicationState {
  private static _mainWindow: MainWindowState | null = null;
  private static windowsOpen: Array<{
    title: string;
    electronBrowserWindowId: number;
    props:
      | { type: 'MAIN_WINDOW' }
      | { type: 'SETTINGS_WINDOW' }
      | { type: 'UTIL_WINDOW'; tool: TasqueTool };
  }> = [];

  private static tools: ToolListEntryData[] = [];

  private constructor() {} // Private constructor to prevent instantiation

  static init() {
    ApplicationState._mainWindow = new MainWindowState();
    ApplicationState.windowsOpen.push({
      title: 'Main Window',
      electronBrowserWindowId: ApplicationState._mainWindow.browserWindow.id,
      props: { type: 'MAIN_WINDOW' },
    });
    ApplicationState.tools = NEW_UTILS;
    addWindowActionHandlers();
  }

  static get mainWindow(): BrowserWindow | null {
    return ApplicationState._mainWindow?.browserWindow || null;
  }

  static get availableTools(): ToolData[] {
    return ApplicationState.tools;
  }

  static async openToolWindow(toolId: number): Promise<boolean> {
    const tool = ApplicationState.tools.find(u => u.id === toolId);
    if (!tool) {
      console.error(`No tool found with ID: ${toolId}`);
      return false;
    }

    const toolWindow = new BrowserWindow({
      title: `${tool.tool_name} | ${tool.title}`,
    });

    setupWindow(toolWindow, icon);

    toolWindow.once('ready-to-show', () => toolWindow.show());

    ApplicationState.windowsOpen.push({
      title: tool.title,
      electronBrowserWindowId: toolWindow.id,
      props: {
        type: 'UTIL_WINDOW',
        tool: tool.tool_name,
      },
    });
    return true;
  }
}
