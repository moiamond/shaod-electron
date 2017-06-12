const electron = require('electron');

const { app, BrowserWindow, ipcMain } = electron;

let mainWindows;

app.on('ready', () => {
    mainWindows = new BrowserWindow({});
    mainWindows.loadURL(`file://${__dirname}/index.html`);
});

ipcMain.on('video:submit', (event, path) => {
    mainWindows.webContents.send('video:metadata', 25);
})