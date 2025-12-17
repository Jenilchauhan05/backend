// Write a program that copies a file named source.txt to a new file named backup.txt using fs.copyFile().

const fs = require("fs");

fs.copyFile("hello.txt", "source.txt", (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data);
    
});

console.log("done");