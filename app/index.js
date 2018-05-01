const pug = require("pug");
const {app, BrowserWindow} = require("electron");

const url = require("url");
const path = require("path");
const fs = require("fs");

const Web3 = require("web3");

let userDataPath;

let config = {
	web3: {
		providerUrl: "http://localhost:8545"
	}
};

let web3;
let mainWindow;

userDataPath = app.getPath("userData");

let configFile = path.join(userDataPath, "config.json");

let dataStore;
let Decentracord;

let sha3;

if (fs.existsSync(configFile)) {
	fs.readFile(configFile, function(err, data) {
		config = JSON.parse(data);

		web3 = new Web3(new Web3.providers.HttpProvider(config.web3.providerUrl));
		
		sha3 = (args) => {
			let s = "";
			if (args instanceof Array) {
				args.forEach(e => {
					s+=e;
				});
			} else {
				s = args;
			}
			web3.sha3(s);
		};

		web3.eth.defaultAccount = web3.eth.accounts[0];

		dataStore = require("./contracts/Storage")(web3);
		Decentracord = require("./contracts/Decentracord")(web3, dataStore.getAddress());
	});
} else {
	fs.writeFileSync(configFile, JSON.stringify(config, null, "\t"));
}

app.on("ready", () => {
	mainWindow = new BrowserWindow();

	loadPUG(mainWindow, "index");
});

function loadPUG(window, file, options) {
	//let h = "data:text/html;charset=utf-8," + encodeURI(pug.renderFile(file));
    
	let pathToFile = path.join(__dirname, "html", file);

	fs.writeFileSync(pathToFile+".html", pug.renderFile(pathToFile+".pug", options));

	window.loadURL(url.format({
		pathname: pathToFile+".html",
		protocol: "file:",
		slashes: true
	}));
}