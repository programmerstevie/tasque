/**
 * The preload script runs before. It has access to web APIs
 * as well as Electron's renderer process modules and some
 * polyfilled Node.js functions.
 *
 * https://www.electronjs.org/docs/latest/tutorial/sandbox
 */
import { ipcRenderer, contextBridge } from "electron";
import type { Main_Window_API } from './types';

window.addEventListener("DOMContentLoaded", () => {
  // const replaceText = (selector: string, text: string) => {
  //   const element = document.getElementById(selector);
  //   if (element) element.innerText = text;
  // };

  // for (const type of ['chrome', 'node', 'electron']) {
  //   replaceText(`${type}-version`, process.versions[type])
  // }
});

const api: Main_Window_API = {
  /**
   * sends a message through channel A
   * 
   * @param msg - the message you want to send
   */
  closeWindow: function () {
    ipcRenderer.invoke("MAIN_WINDOW", 'CLOSE');
  },
  /**
   * puts a callback on messages sent from main through channel B
   * 
   * @param func 
   */
  receiveFromB: function (func: Function) {
    ipcRenderer.on("B", (e, ...args) => func(e, ...args));
  },
};

contextBridge.exposeInMainWorld("api", api);
