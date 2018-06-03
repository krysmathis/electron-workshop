const { ipcRenderer } = require( "electron" );

document.addEventListener( "DOMContentLoaded", () => {
    
    const version = process.version;
    const e = document.getElementById("info");
    e.textContent = `I'm running Node.js version: ${version}`;
    
    const btn = document.getElementById("clickme");
    btn.addEventListener( "click", e => {
        console.log( "I was clicked." );
        ipcRenderer.send( "show-dialog", { message: "The button was clicked."});
    });
});

ipcRenderer.on("response-dialog", (e, arg) => {
    if (arg === "ping") {
        console.log("pong");
    }
    ipcRenderer.sendSync("sync-response-to-dialog","score!");
});
