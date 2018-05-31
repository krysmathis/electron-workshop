"use strict";

const electron = require("electron");
const { app, BrowserWindow, ipcMain, dialog } = electron;
const path = require("path");
const reload = require("electron-reload");
const isDev = require("electron-is-dev");

let mainWindow = null;

if (isDev) {
    const electronPath = path.join(__dirname, "node_modules", ".bin", "electron");
    reload(__dirname, {electron: electronPath });
}

app.on( "window-all-closed", () => {
    if ( process.platform !== "darwin" ) {
        app.quit();
    }
});

app.on( "ready", () => {
    mainWindow = new BrowserWindow ( { width: 800, height: 600 })
    mainWindow.loadURL( `file://${__dirname}/index.html`);
    if ( isDev ) {
        mainWindow.webContents.openDevTools();
    }
    mainWindow.once(" ready-to-show", () => {
        mainWindow.show();
    });
    mainWindow.on( "closed", () => {
        mainWindow = null;
    });
});

ipcMain.on( "show-dialog", (e, arg) => {
    const msgInfo = {
        title: "My App Alert", 
        message: arg.message,
        buttons: ["OK"]
    };
    dialog.showMessageBox( msgInfo );
    e.sender.send("response-dialog", "ping");
} );

ipcMain.on("sync-response-to-dialog", (e, arg) => {
    console.log("copy that.");
    const msgInfo = {
        title: "My App Alert", 
        message: "copy that",
        buttons: ["OK"]
    };
    dialog.showMessageBox( msgInfo );
});
