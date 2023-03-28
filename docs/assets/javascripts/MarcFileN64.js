/* MarcFile.js extensions for N64 ROMs */

MarcFile.prototype.convertFormat = function (toFormat) {
  const fromFormat = this.romFormat();
  console.log('convertFormat from ' + fromFormat);
  if (toFormat != 'iso') {
    console.log('Only currently support converting to iso');
    return false;
  }
  if (fromFormat === toFormat) {
    return true;
  } else {
    if (fromFormat === 'nkit') { this.patchNkit(); }
    if (fromFormat === 'ciso') { this.patchCiso(); }
  }
  return this.romFormat === toFormat;
}

MarcFile.prototype.originalRomFormat = function () {
  if (this.originalFormat)
    return this.originalFormat
  else
    return this.romFormat();
}

MarcFile.prototype.readHexString = function (len) {
  this._lastRead = '';
  for (var i = 0; i < len && (this.offset + i) < this.fileSize && this._u8array[this.offset + i] > 0; i++)
    this._lastRead = this._lastRead + this._u8array[this.offset + i].toString(16);

  this.offset += len;
  return this._lastRead
}

MarcFile.prototype.romFormat = function () {
  const last_offset = this.offset;
  const gameId = '47344e4a'; // G4NJ
  const cisoMagic = '4349534f'; // CISO
  const nkitMagic = '4e4b4954'; // NKIT
  this.offset = 0;
  var magic1 = this.readHexString(4);
  this.offset = 0x200;
  var magic2 = this.readHexString(4);
  this.offset = 0x8000;
  var magic3 = this.readHexString(4);
  this.offset = last_offset;
  if (magic1 == cisoMagic && magic3 == gameId) {
    var format = 'ciso'; // CISO files start with CISO and have G4NJDA at 0x8000
  } else if (magic2 == nkitMagic && magic1 == gameId) {
      var format = 'nkit'; // NKIT files have NKIT at 0x200 and start with G4NJDA
  } else if (magic1 == gameId) {
    var format = 'iso'; // At this point if it starts with G4NJDA it is likely a GNT4 ISO
  } else {
    var format = 'unknown';
  }

  if (!this.originalFormat)
    this.originalFormat = format;
  return format;
}

MarcFile.prototype.setOutputName = function (fileName) {
  this.outputName = fileName;
}

MarcFile.prototype.patchNkit = function () {
  console.log("patchNkit -> start");
  var newBytes = new Uint8Array(0x57058000);

  // Copy sys bytes
  for (var i = 0; i < 0x2480F0; i++) {
    newBytes[i] = this._u8array[i];
  }

  // Fix sys bytes
  for (var i = 0x200; i < 0x214; i++) {
    newBytes[i] = 0;
  }
  newBytes[0x500] = 0x00;
  newBytes[0x501] = 0x52;
  newBytes[0x502] = 0x02;
  newBytes[0x503] = 0x02;

  // Fix file system table (fst.bin)
  const skip = [0x245250, 0x24525C, 0x24612C, 0x2462B8, 0x246660, 0x246720];
  for (var i = 0x244D28; i < 0x246760; i += 0xC) {
    if (!skip.includes(i)) {
      // Get original offset
      var buff = new Uint8Array(0x4);
      buff[0] = this._u8array[i];
      buff[1] = this._u8array[i + 1];
      buff[2] = this._u8array[i + 2];
      buff[3] = this._u8array[i + 3];
      // Update offset
      var dataView = new DataView(buff.buffer);
      var offset = dataView.getUint32(0, false); // Offset is 0 for some reason?
      offset += 0xC2A8000;
      if (i >= 0x245268) {
        offset += 0x2B7C;
      }
      // Write new offsets
      dataView.setUint32(0, offset, false);
      newBytes[i] = buff[0];
      newBytes[i + 1] = buff[1];
      newBytes[i + 2] = buff[2];
      newBytes[i + 3] = buff[3];
    }
  }
  newBytes[0x2480E8] = 0;
  newBytes[0x2480E9] = 0;
  newBytes[0x2480EA] = 0;
  newBytes[0x2480EB] = 0;

  // Copy the rest of the files over
  var offset = 0xC2A8000;
  for (var i = 0x250000; i < this.fileSize; i++) {
    newBytes[i + offset] = this._u8array[i];
    if (i == 0x39288004) {
      // The GNT4 ISO has extra spacing after some files here, so account for that
      offset += 0x2B7C // TODO: Should this be 0x2B7C?
    }
  }

  // Last little bit of cleanup
  newBytes[0x45530002] = 0x0;
  newBytes[0x45530003] = 0x0;

  this._u8array = newBytes;
  console.log("patchNkit -> end");
}

MarcFile.prototype.patchCiso = function () {
  // Old code
  for (var i = 0; i < this.fileSize; i += 4) {
    var j = this._u8array[i];
    var k = this._u8array[i + 1];

    this._u8array[i] = this._u8array[i + 2];
    this._u8array[i + 1] = this._u8array[i + 3];
    this._u8array[i + 2] = j;
    this._u8array[i + 3] = k;
  }
}
