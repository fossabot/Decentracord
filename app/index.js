const pug = require("pug");
const {app, BrowserWindow} = require("electron");

const url = require("url");
const path = require("path");
const fs = require("fs");

//const Web3 = require("web3");
//let sha3 = Web3.utils.soliditySha3;

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

let StorageData = require("./StorageData");
let StorageContract;
let dataStore;

let DecentracordData = require("./DecentracordData");
let DecentracordContract;
let Decentracord;

if (fs.existsSync(configFile)) {
	fs.readFile(configFile, function(err, data) {
		config = JSON.parse(data);

		//web3 = new Web3(new Web3.providers.HttpProvider(config.web3.providerUrl));
		
		web3.eth.defaultAccount = web3.eth.accounts[0];

		StorageContract = web3.eth.contract(StorageData.ABI);
		dataStore = StorageContract.at(StorageData.Address);

		DecentracordContract = web3.eth.contract(DecentracordData.ABI);
		//dataStore = DecentracordContract.at(dataStore.getAddress(sha3("contract.name", "Main")));
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