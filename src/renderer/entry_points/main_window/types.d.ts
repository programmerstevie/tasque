import type { Main_Window_API } from "src/preload/types";

export type TM_Page = 'HOME' | 'CONFIG';

declare global {
  interface Window {
    api: Main_Window_API
  }
}