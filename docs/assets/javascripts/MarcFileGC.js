/* MarcFile.js extensions for GameCube ISOs */

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
  } else {
    var format = 'iso'; // At this point if it starts with G4NJDA it is likely a GNT4 ISO
  }

  if (!this.originalFormat)
    this.originalFormat = format;
  return format;
}

MarcFile.prototype.setOutputName = function (fileName) {
  this.outputName = fileName;
}

MarcFile.prototype.patchGoodDump = function () {
  console.log("patchGoodDump -> start");
  var newBytes = new Uint8Array(0x57058000);

  // Copy bytes over
  for (var i = 0; i < this.fileSize; i++) {
    newBytes[i] = this._u8array[i];
  }

  // First write this weird four byte word to bi2.bin
  newBytes[0x500] = 0x00;
  newBytes[0x501] = 0x52;
  newBytes[0x502] = 0x02;
  newBytes[0x503] = 0x02;

  console.log("patchGoodDump -> end");
}

MarcFile.prototype.patchNkit = function () {
  console.log("patchNkit -> start");
  var newBytes = new Uint8Array(0x57058000);

  // Copy sys bytes
  for (var i = 0; i < 0x2480F0; i++) {
    newBytes[i] = this._u8array[i + 0x8000]; // ciso sys starts at 0x8000
  }

  // Fix sys bytes
  for (var i = 0x200; i < 0x214; i++) {
    newBytes[i] = 0;
  }
  newBytes[0x500] = 0x00;
  newBytes[0x501] = 0x52;
  newBytes[0x502] = 0x02;
  newBytes[0x503] = 0x02;

  // Copy the rest of the files over
  var offset = 0xBFF8000;
  for (var i = 0x500000; (offset + i) < 0x57058000; i++) {
    newBytes[i + offset] = this._u8array[i];
  }

  this._u8array = newBytes;
  console.log("patchNkit -> end");
}

MarcFile.prototype.patchCiso = function () {
  console.log("patchCiso -> start");
  var newBytes = new Uint8Array(0x57058000);

  // Copy sys bytes
  for (var i = 0; i < 0x2480F0; i++) {
    newBytes[i] = this._u8array[i + 0x8000]; // ciso sys starts at 0x8000
  }

  // Fix sys bytes
  for (var i = 0x200; i < 0x214; i++) {
    newBytes[i] = 0;
  }
  newBytes[0x500] = 0x00;
  newBytes[0x501] = 0x52;
  newBytes[0x502] = 0x02;
  newBytes[0x503] = 0x02;

  // Copy the rest of the files over
  var offset = 0xBFF8000;
  for (var i = 0x500000; (offset + i) < 0x57058000; i++) {
    newBytes[i + offset] = this._u8array[i];
  }

  // Zero out padding bytes from 0x4553001C - 0x45532B7F (0x2B63 bytes).
  for (var i = 0x4553001C; i < 0x45532B80; i++) {
    newBytes[i] = 0;
  }

  this._u8array = newBytes;
  console.log("patchCiso -> end");
}
