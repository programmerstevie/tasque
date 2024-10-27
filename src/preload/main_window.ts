/**
 * The preload script runs before. It has access to web APIs
 * as well as Electron's renderer process modules and some
 * polyfilled Node.js functions.
 *
 * https://www.electronjs.org/docs/latest/tutorial/sandbox
 */
import { ipcRenderer, contextBridge } from 'electron';
import type { MainApi } from './types';
import { WindowActionsIPC } from './util/windowActions';
import {
  type ToolListEntryData,
} from '@api/types';

window.addEventListener('DOMContentLoaded', () => {
  // const replaceText = (selector: string, text: string) => {
  //   const element = document.getElementById(selector);
  //   if (element) element.innerText = text;
  // };
  // for (const type of ['chrome', 'node', 'electron']) {
  //   replaceText(`${type}-version`, process.versions[type])
  // }
});

const MainIPC: MainApi = {
  consoleLog: function (msg: string) {
    void ipcRenderer.invoke('CONSOLE_LOG', msg);
  },
  getTools: async function (): Promise<ToolListEntryData[]> {
    const c = (await ipcRenderer.invoke('GET_TOOLS')) as ToolListEntryData[];
    return c;
  },
  openTool: async function (tool_id: number): Promise<boolean> {
    return await ipcRenderer.invoke('OPEN_TOOL', tool_id) as boolean;
  }
};

//! MAKE SURE THIS ALIGNS WITH src/renderer/lib/types.d.ts
contextBridge.exposeInMainWorld('TASQUE', {
  WINDOW_ACTION_API: WindowActionsIPC,
  MAIN_API: MainIPC,
});
