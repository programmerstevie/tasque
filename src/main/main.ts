// Modules to control application life and create native browser window
import { app, BrowserWindow, ipcMain, globalShortcut } from 'electron';

// import { addWindowActionHandlers } from './controller/window_action';
import { ApplicationState } from './state';

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app
  .whenReady()
  .then(() => {
    ApplicationState.init();

    app.on('activate', function () {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (BrowserWindow.getAllWindows().length === 0) {
        // DO NOTHING
      }
    });

    globalShortcut.register('CommandOrControl+Shift+D', () => {
      const win = BrowserWindow.getFocusedWindow();
      win?.webContents.openDevTools();
      win?.setResizable(true);
    });

    ipcMain.handle('CONSOLE_LOG', (_e, msg: string) => {
      console.log(msg);
    });
    // app.on('before-quit', ()=)
  })
  .catch((err) => {
    console.log(err);
  });

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
