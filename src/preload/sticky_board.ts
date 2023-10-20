/**
 * The preload script runs before. It has access to web APIs
 * as well as Electron's renderer process modules and some
 * polyfilled Node.js functions.
 *
 * https://www.electronjs.org/docs/latest/tutorial/sandbox
 */
import { ipcRenderer, contextBridge } from 'electron';

window.addEventListener('DOMContentLoaded', () => {
  /*
  const replaceText = (selector: string, text: string) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };
  */
  // for (const type of ['chrome', 'node', 'electron']) {
  //   replaceText(`${type}-version`, process.versions[type])
  // }
});

contextBridge.exposeInMainWorld('api', {
  /**
   * sends a message through channel A
   *
   * @param msg - the message you want to send
   */
  sendToA: function (msg: string) {
    ipcRenderer.send('A', msg);
  },
  /**
   * puts a callback on messages sent from main through channel B
   *
   * @param func
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  receiveFromB: function (func: Function) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-argument
    ipcRenderer.on('B', (e, ...args) => func(e, ...args));
  },
});
