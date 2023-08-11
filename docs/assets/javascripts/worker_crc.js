/* Rom Patcher JS v20200502 - Marc Robledo 2016-2020 - http://www.marcrobledo.com/license */

self.importScripts(
	'./MarcFile.js',
	'./crc.js',
	'./gnt4.js'
);



self.onmessage = event => { // listen for messages from the main thread
	var sourceFile=new MarcFile(event.data.u8array);
	var crcVal = crc32(sourceFile, event.data.startOffset);
	// Convert known GNT4 dumps to the standard "bad dump" that the community uses 
	if (crcVal == 0x60aefa3e) {
		sourceFile.seek(0x200);
		if (sourceFile.readU32() == 0x4e4b4954) { // NKIT magic
			console.log("nkit");
			var newBytes = patchNkit(event.data.u8array);
			sourceFile=new MarcFile(newBytes);
			console.log(crc32(sourceFile, 0)) // Bad!
		} else {
			console.log("good dump");
			var newBytes = patchGoodDump(event.data.u8array);
			sourceFile=new MarcFile(newBytes);
			console.log(crc32(sourceFile, 0))
		}
	} else if (crcVal == 0x0371b18c) {
		console.log("ciso");
		var newBytes = patchCiso(event.data.u8array);
		sourceFile=new MarcFile(newBytes);
		crcVal = 0x55ee8b1a;
	}

	self.postMessage(
		{
			crc32:crcVal,
			u8array:newBytes
		},
		[
			newBytes.buffer
		]
	);
};