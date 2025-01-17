const fs = require("fs");

// unlink a existing file.....

fs.unlink("./log.txt", (err) => {
    if (err) throw err;

});