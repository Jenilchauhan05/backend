// Write a Node.js program using child_process.exec() to run the shell command to check the 
// current version of node. 

const {exec} = require("child_process");

exec("node --version", (err, stdout, stderr) => {
    if (err) {
        console.log(err);
    }
    if (stderr) {
        console.log("standard err : ", stderr);
    }
    console.log("standard output : ", stdout); 
});
