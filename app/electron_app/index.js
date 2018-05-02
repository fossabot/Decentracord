const electron = require("electron");             
const {app, BrowserWindow} = electron;

const IPFSFactory = require("ipfsd-ctl");

const url = require("url");
const path = require("path");
const fs = require("fs");

const userDataPath = app.getPath("userData");
let configFile = path.join(userDataPath, "config.json");

let config = {
};

let mainWindow;

const ipfsd = IPFSFactory.create();

app.on("ready", () => {
	mainWindow = new BrowserWindow();

	ipfsd.spawn((err, ipfsNode) => {
		ipfsNode.setConfig("Addresses.Gateway", "/ipv4/127.0.0.1/tcp/1324", (err) => {	
			ipfsNode.start((err, ipfs) => {
				//ipfs.pin.add();
				ipfs.config.get().then((config) => {
					console.log(JSON.stringify(JSON.parse(config), null, "\t"));
					mainWindow.loadURL("http://localhost:1324/ipns/QmVT7hWKntLBDkZQLjR4D2vSXbcnYBRMwua7SknnVzdXo6/");
				});
			});
		});
	});
});

// BrowserWindow.prototype.loadPug = (file, options) => {
// 	//let h = "data:text/html;charset=utf-8," + encodeURI(pug.renderFile(file));
    
// 	let pathToFile = path.join(__dirname, "html", file);

// 	fs.writeFileSync(pathToFile+".html", pug.renderFile(pathToFile+".pug", options));

// 	this.loadURL(url.format({
// 		pathname: pathToFile+".html",
// 		protocol: "file:",
// 		slashes: true
// 	}));
// };