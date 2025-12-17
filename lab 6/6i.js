// Write a program that checks if the file config.json exists in the current directory using 
// fs.existsSync() and prints the result.

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'config.json');

if (fs.existsSync(filePath)) {
    console.log("config.json file exists.");
} else {
    console.log("config.json file does NOT exist.");
}
