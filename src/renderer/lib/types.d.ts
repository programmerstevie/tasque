import type { MainApi, WindowActionApi } from 'src/preload/types';

declare global {
  export interface Window {
    /**
     * @name TASQUE
     * @description Tasque property for inter-process communication to the main process.
     */
    TASQUE: {
      /**
       * @name WINDOW_ACTION_API
       * @description Actions for controlling the state of the window.
       */
      WINDOW_ACTION_API: WindowActionApi;
      /**
       * @name MAIN_API
       * @description API for doing general messaging to the main process.
       */
      MAIN_API: MainApi;
    };
  }
}
