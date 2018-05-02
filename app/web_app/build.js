const pug = require("pug");
const IPFSFactory = require("ipfsd-ctl");
const ncp = require("ncp").ncp;

const fs = require("fs");
const path = require("path");

const src = "app/web_app/src";
const out = "build/web";

let ipfsd = IPFSFactory.create();

const walkSync = (dir, filelist = []) => {
	fs.readdirSync(dir).forEach(file => {
  
		filelist = fs.statSync(path.join(dir, file)).isDirectory()
			? walkSync(path.join(dir, file), filelist)
			: filelist.concat(path.join(dir, file));
  
	});
	return filelist;
};

let rmdirSync = (path) => {
	if (fs.existsSync(path)) {
		fs.readdirSync(path).forEach((file) => {
			let curPath = path + "/" + file;
			if (fs.lstatSync(curPath).isDirectory()) { // recurse
				rmdirSync(curPath);
			} else { // delete file
				fs.unlinkSync(curPath);
			}
		});
		fs.rmdirSync(path);
	}
};

if (fs.existsSync(out)) {
	console.log("Prebuild cleanup");
	rmdirSync(out);
}
console.log("Build start");
fs.mkdirSync(out);
fs.readdir(src, (err, files) => {
	files.forEach(file => {
		file = src+"/"+file;
		let p = path.parse(file);
		if (file.match(".*\\.pug")) {
			console.log("Rendering "+file);
			let html = pug.renderFile(file);

			console.log("Writing "+out+"/"+p.name+".html");
			fs.writeFileSync(out+"/"+p.name+".html", html);
		} else {
			console.log("Copying "+file+" to "+out+"/"+p.base);
			fs.lstat(file, (err, stat) => {
				if (stat.isDirectory()) {
					ncp(file, out+"/"+p.base);
				} else {
					fs.copyFileSync(file, out+"/"+p.base);
				}
			});
		}
	});

	console.log("Build Done!");
	console.log("Deploying to IPFS");
	console.log("Starting an IPFS node");
	ipfsd.spawn((err, ipfsNode) => {
		console.log("Starting the IPFS daemon");
		ipfsNode.start((err, ipfs) => {
			console.log("The daemon is up and running!");
			console.log("Adding files to IPFS...");
			const stream = ipfs.files.addReadableStream();
			let hash;

			stream.on("data", function (file) {
				// if (file.path == "\\") {
				// 	dirHash = file.hash;
				// }
				console.log(file.path+":");
				console.log("\t"+file.hash);
				hash = file.hash;
				publishIPNS(ipfs, hash);
			});

			let files = walkSync(out);

			console.log(files.length+" files to add");

			files.forEach(file => {
				stream.write({
					path: file.substring(out.length),
					content: fs.readFileSync(file)
				});
			});

			// stream.write({
			// 	path: "\\",
			// 	content: null
			// });

			stream.end();
		});
	});
});

let checkedForKey = false;

function genKey(ipfs, name, callback) {
	if (!checkedForKey) {
		checkedForKey = true;
		ipfs.key.list((err, keys) => {
			console.log(keys);
			let exists = false;
			keys.forEach((key => {
				if (key.name == name) {
					exists = true;
				}
			}));
			
			if (!exists) {
				ipfs.key.gen(name, {
					type: "rsa",
					size: 2048
				}, (err, key) => {callback(err, key);});
			} else {
				callback(err, {name: name});
			}
		});
	} else {
		callback(undefined, {name: name});
	}
}

function publishIPNS(ipfs, hash) {
	genKey(ipfs, "decentracord", (err, key) => {
		pub(ipfs, hash, key);
	});
}

function pub(ipfs, hash, key) {
	ipfs.name.publish(hash, { key: key.name }, (err, name) => {
		if (!err) {
			console.log("The published IPNS name is: "+name.name);
			console.log("and it resolves to: "+name.value);
		} else {
			throw err;
		}
	});
}