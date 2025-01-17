const http = require("http");
const fs = require("fs");


const myServer = http.createServer((req , res) =>{

        if(req.url =='/favicon.ico')  return res.end();
              
        const log =  `${Date.now()} ${req.url} : new req. received \n`;
        fs.appendFile("./log.txt",log, (err,data) =>{
            switch(req.url){
                    case  '/' :
                            res.end("HomePage");
                            break;
                    case  '/about' :
                            res.end("About page");
                            break;
                    case  '/contact-us' :

                            res.end("contact page");
                            break;
                    default : res.end("404 page not found");      
                            
            }
                
        })
        
});

myServer.listen(8000, () =>{console.log("ServerStarted")});

