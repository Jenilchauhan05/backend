const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
});

app.get("/help", (req, res) => {
    res.send("<h1>Help Page</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>about Page</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Page</h1>");
});

app.get("/main", (req, res) => {
    res.send("<h1>Main Page</h1>");
});

app.use((req, res) => {
    res.status(404).send(message = "page not found");
});

app.listen(3000, () => {
    console.log("app working");
});