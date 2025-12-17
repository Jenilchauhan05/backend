// Create a new URL object with base, then append pathname and query, and print final URL

const myUrl = new URL("https://example.com");

myUrl.pathname = "/students/details";

myUrl.searchParams.append("name", "Jenil");
myUrl.searchParams.append("age", "20");
myUrl.searchParams.append("dept", "CSE");

console.log("Final URL:", myUrl.href);
