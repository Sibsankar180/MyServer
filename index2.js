const http = require('http');


const myServer = http. createServer(function (req,res){
    
    console.log(req.url);
    res.write("The date and time are currrently:"+Date.now());
    res.end();
}).listen(8000, (err)=>{ console.log("server started")});