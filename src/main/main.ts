// Modules to control application life and create native browser window
import { app, BrowserWindow, ipcMain } from "electron";


declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

type MainWindowAction = 'CLOSE' | null;

export const createMainWindow = () => {
  let mainWindow = new BrowserWindow({
    width: 343,
    height: 676,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
      sandbox: true,
      contextIsolation: true,
    },
    frame: false,
  });

  // load index.html
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  ipcMain.handle("MAIN_WINDOW", (event, action: MainWindowAction) => {
    switch (action) {
      case 'CLOSE':
        mainWindow.setClosable(true);
        mainWindow.close();
      default:
        // do nothing
    }
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createMainWindow();

  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});


// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
