// 1) Write a Node.js program that prints the directory name, file name, file extension, and full 
// path of the code file. (A) 
// 2) Create a program that joins "users", "arjun", "documents", "project" into a single path using 
// path.join(). (A) 
// 3) Write a program to fix the path="//folder//subfolder////file.txt" using path.normalize() and 
// display the clean normalised path. (A) 
// 4) Write a program that checks whether the given path is absolute or relative paths. (A) 
// 5) Write a Node.js program that uses path.resolve() to convert "folder", "subfolder", "app.js" 
// into an absolute path. Print the final resolved path. (A) 
// 6) Write a program that prints: (A) 
// • Operating system name 
// • Release version 
// • Platform 
// • Architecture 
// 7) Write a program that prints the total memory and free memory in GB (B) 
// 8) Write a Node.js program that prints details about the currently logged-in user in operating 
// system. (B) 
// 9) Write a program that prints how long the system has been running (uptime) in seconds and in 
// hours. (B) 
// 10) Write a Node.js program that prints: (B) 
// • Number of CPU cores 
// • Model name of each core 
// • Network interface details

const { log } = require("console");
const path = require("path");
const os = require("os");
const { uptime } = require("process");

console.log(__dirname);
console.log(__filename);
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.join("users", "arjun", "documents", "project"));

console.log(path.normalize("//folder//subfolder////file.txt"));

console.log(path.isAbsolute("/index.js"));
console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'));

console.log(path.resolve("folder", "subfolder", "app.js"));

console.log(os.type());
console.log(os.version());
console.log(os.platform());
console.log(os.arch());

console.log(os.freemem()/(1024*1024*1024));
console.log(os.totalmem()/(1024*1024*1024));

console.log(uptime()/(3600));

console.log(os.userInfo());

console.log(os.cpus());

console.log(os.networkInterfaces());








