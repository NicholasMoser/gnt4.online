
function patchGoodDump(_u8array) {
    console.log("patchGoodDump -> start");
    var newBytes = new Uint8Array(0x57058000);
  
    // Copy bytes over
    for (var i = 0; i < 0x57058000; i++) {
      newBytes[i] = _u8array[i];
    }
  
    // First write this weird four byte word to bi2.bin
    newBytes[0x500] = 0x00;
    newBytes[0x501] = 0x52;
    newBytes[0x502] = 0x02;
    newBytes[0x503] = 0x02;
  
    console.log("patchGoodDump -> end");
  }
  
function patchNkit(_u8array) {
    console.log("patchNkit -> start");
    var newBytes = new Uint8Array(0x57058000);
  
    // Copy sys bytes
    for (var i = 0; i < 0x2480F0; i++) {
      newBytes[i] = _u8array[i + 0x8000]; // ciso sys starts at 0x8000
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
      newBytes[i + offset] = _u8array[i];
    }
  
    console.log("patchNkit -> end");
    return newBytes;
  }
  
function patchCiso(_u8array) {
    console.log("patchCiso -> start");
    var newBytes = new Uint8Array(0x57058000);
  
    // Copy sys bytes
    for (var i = 0; i < 0x2480F0; i++) {
      newBytes[i] = _u8array[i + 0x8000]; // ciso sys starts at 0x8000
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
      newBytes[i + offset] = _u8array[i];
    }
  
    // Zero out padding bytes from 0x4553001C - 0x45532B7F (0x2B63 bytes).
    for (var i = 0x4553001C; i < 0x45532B80; i++) {
      newBytes[i] = 0;
    }
  
    console.log("patchCiso -> end");
    return newBytes;
  }