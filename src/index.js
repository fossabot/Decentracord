const electron = require("electron");
const {app, BrowserWindow} = electron;

const url = require("url");
const path = require("path");

const pug = require("pug");

const fs = require("fs");


let mainWindow;

app.on("ready", () => {
    mainWindow = new BrowserWindow();

    loadPUG(mainWindow, "index")
});

function loadPUG(window, file) {
    //let h = "data:text/html;charset=utf-8," + encodeURI(pug.renderFile(file));
    
    let pathToFile = path.join(__dirname, "html", file);

    fs.writeFileSync(pathToFile+".html", pug.renderFile(pathToFile+".pug"))

    window.loadURL(url.format({
        pathname: pathToFile+".html",
        protocol: "file:",
        slashes: true
    }));
}