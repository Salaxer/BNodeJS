const os = require('os');

// show architecture
// console.log(os.arch());

// show platform
// console.log(os.platform());

// cores
// console.log(os.cpus());

// 
// console.log(os.constants);
const SIZE = 1024;
const kb = (bytes) => bytes/SIZE;
const mb = (bytes) => kb(bytes/SIZE);
const gb = (bytes) => mb(bytes/SIZE);

//free memory 
console.log(os.freemem());
console.log(`${kb(os.freemem())} KB`);
console.log(`${mb(os.freemem())} MB`);
console.log(`${gb(os.freemem())} GB`);
console.log(gb(os.totalmem()));

// main directory
// console.log(os.homedir());

// temp directory
// console.log(os.tmpdir());

// console.log(os.hostname());
console.log(os.networkInterfaces());