// Create a webapp in NodeJS which reads ƒles like about.txt, contact.txt and display it using 
// http core module

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === "/about") {
        fs.readFile("contact.txt", "utf-8", (err, data) => {
            if (err) {
                res.writeHead(500, {"content-type": "text-plain"});
                res.end("err in about file");
            } else {
                res.writeHead(200, {"content-type": "text-plain"});
                res.end(data);
            }
        })
    }
    else if (req.url === "/contact") {
        fs.readFile("contact.txt", "utf-8", (err, data) => {
            if (err) {
                res.writeHead(500, {"content-type": "text-plain"});
                res.end("err in contact file");
            } else {
                res.writeHead(200, {"content-type": "text-plain"});
                res.end(data);
            }
        })
    }
    else {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Welcome to Home Page\nUse /about or /contact");
    }
});

server.listen(3000, () => {
    console.log("server listening at port 3000");
});