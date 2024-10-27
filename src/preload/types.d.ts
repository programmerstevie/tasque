import type { ToolListEntryData } from '@api/types';

export type WindowActionApi = {
  /**
   * closes the main window
   */
  closeWindow: () => void;
  /**
   * closes the main window
   */
  minimizeWindow: () => void;
  /**
   * closes the main window
   */
  maximizeWindow: () => void;
};

export type MainApi = {
  /**
   * Logs to the main console
   */
  consoleLog: (msg: string) => void;

  /**
   * Gets Tools
   */
  getTools: () => Promise<ToolListEntryData[]>;

  /**
   * Opens a tool in a new window
   */
  openTool: (tool_id: number) => Promise<boolean>;
};
