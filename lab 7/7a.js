//  Create a hello world webapp using “http” core module in NodeJS. (A) 

const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader("content-type", "html-plain");
    if (req.url === "/") {
        res.statusCode = 200;
        res.end("<h1>Home page</h1>");
    }
    else if (req.url === "/about") {
        res.statusCode = 200;
        res.end("<h1>About us page</h1>");
    }
    else if (req.url === "/contact") {
        res.statusCode = 200;
        res.end("<h1>Contact page</h1>");
    }
    else if (req.url === "/help") {
        res.statusCode = 200;
        res.end("<h1>Help page 😣</h1>");
    }
    else if (req.url === "/service") {
        res.statusCode = 200;
        res.end("<h1>Service page</h1>");
    }
});

server.listen(3000, () => {
    console.log("server listening at port 3000");
});