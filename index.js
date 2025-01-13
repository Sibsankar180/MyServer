const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req , res) =>{
        const log =  `${Date.now()} : new req. received \n`;
        fs.appendFile("./log.txt",log, (err,data) =>{
            res.end("WelCome");
        })
        res.end("Welcome");
});

myServer.listen(8000, () =>{console.log("ServerStarted")});