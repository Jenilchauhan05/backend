const express = require('express');
const app = express();
const fs = require('fs');

app.get("/", (req, res) => {
    fs.readFile("contact.txt", "utf-8", (err, data) => {
    if (err) {
            res.writeHead(500, {"content-type": "text-plain"});
            res.send("err in about file");
    }   else {
            res.send(data);
        }
    });
});

app.get("/main", (req, res) => {
    fs.readFile("about.txt", "utf-8", (err, data) => {
    if (err) {
        res.writeHead(500, {"content-type": "text-plain"});
        res.send("err in contact file");
    }   else {
        res.send(data);
        }
    });
});

app.listen(3000, () => {
    console.log("server listening at port 3000");
});