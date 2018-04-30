const config = require("../truffle.js");

const Storage = artifacts.require("Storage");
const Decentracord = artifacts.require("Decentracord");

let storage;

let sha3 = config.web3.soliditySha3;

module.exports = (deployer) => {
	// Deploy storage
	deployer.deploy(Storage, { overwrite: false }).then(() => {
		// Log the storage address
		console.log("The storage contract's address is:");
		console.log(Storage.address);

		// Get the deployed storage instance
		storage = Storage.deployed();

		// Deploy other contracts
		return deployer.deploy(
			[Decentracord, Storage.address]
		);
	}).then(() => {
		// Register contracts with the hub (the Storage contract)
		registerContract(Decentracord, "Main");
	});
};

function registerContract(contract, name) {
	storage.setAddress(sha3("contract.name", name), contract.address);
	storage.setAddress(sha3("contract.address", contract.address), contract.address);
}

/**
 * Function that "seals" the storage contract
 * When sealed the contract can only be changed by registered contracts
 * If not sealed then can be changed by the owner AND by the registered contracts
 */
function sealStorage() {
	storage.setBool(sha3("contract.storage.initialised"), true);
}