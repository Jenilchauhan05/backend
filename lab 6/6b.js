// Use fs.readFileSync() to read info.txt and print the content, Compare execution with the 
// asynchronous version.

const fs = require("fs");

data = fs.readFileSync("hello.txt");
    
    try {
        console.log(data.toString());
    }
    catch {
        console.log(err);
    }
