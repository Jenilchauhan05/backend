// Create a program that appends the text into a file named output.txt.

// Create a program that writes the text into a file named output.txt.

const fs = require("fs");

fs.appendFile("hello.txt", "and jenil", (err) => {
    if (err) {
        console.log(err);
    }
    console.log("appended");
    
});

console.log("done");
