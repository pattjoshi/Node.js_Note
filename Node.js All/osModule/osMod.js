const os = require("os");

// get architecture of the system
console.log(os.arch());

console.log(os.type()); // returns the operating system name

// Get the total amount of RAM in the system in gigabytes
const totalMemory = os.totalmem();
console.log(`Total memory: ${totalMemory / 1024 / 1024 / 1024} GB`);

// get free memory in the system in gigabytes
const freeMemory = os.freemem();
console.log(`Free memory: ${freeMemory / 1024 / 1024 / 1024} GB`);

console.log(os.platform()); // khow the operating system is running

// ctrl + shift + ecs // task manager

console.log(os.tmpdir()); // returns the path to the temporary directory
