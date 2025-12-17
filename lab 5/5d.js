// Write a program that parses the given URL, Print protocol, hostname, pathname, and query 
// parameters separately.

const url = require("url");
const adr = "https://www.Darshan.ac.in/abcd.js?firstName='jenil'&lastName='Chauhan'&age=20"

const q = url.parse(adr, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);
console.log(q.query);

// var qData = q.query;
// console.log(qData.firstName);
