const { app, Menu, shell } = require("electron");
const isDev = require("electron-is-dev");

const buildMenu = () => {
    const template = [];

    if (process.platform === "darwin") {
        template.push({
            label: app.getName(),
            submenu: [
                { role: "about" },
                { type: "separator" },
                { role: "services", submenu: [] },
                { type: "separator" },
                { role: "hide" },
                { role: "hideothers" },
                { role: "unhide" },
                { type: "separator" },
                { role: "quit" }
            ]
        });
    }

    template.push({
        label: "Edit",
        submenu: [
            { role: "undo" },
            { role: "redo" },
            { role: "separator" },
            { role: "cut" },
            { role: "copy" },
            { role: "paste" },
            { role: "pasteandmatchstyle" },
            { role: "delete" },
            { role: "selectall" }
        ]
    });

    if (isDev) {
        template.push( {
            label: "View",
            submenu: [
                { role: "reload" },
                { role: "forcereload"},
                { role: "toggledevtools"},
                { type: "separator" },
                { role: "resetzoom"},
                { role: "zoomin"},
                { role: "zoomout"},
                { role: "separator"},
                { role: "togglefullscreen"},
                
            ]
        });
    }

    template.push ( {
        role: "help",
        submenu: [{
            label: "Take me to Google",
            accelerator: "CmdOrCtrl+G",
            click() {
                shell.openExternal("https://google.com");
            }
        }]
    });

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
}

module.exports = {
    buildMenu
}