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
};
