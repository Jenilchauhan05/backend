// Watch changes in watchme.txt

const fs = require('fs');      
const path = require('path');  

const filePath = path.join(__dirname, "hello.txt");

fs.watch(filePath, (eventType) => {

    if (eventType === "change") {
        console.log("File Changed");
    }

});
