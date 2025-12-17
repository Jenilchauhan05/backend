// Create a program that writes the text into a file named output.txt.

const fs = require("fs");

fs.writeFile("hello.txt", "i am student", (err) => {
    if (err) {
        console.log(err);
    }
});

console.log("done");
