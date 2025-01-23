
let http = require("http");
let fs = require("fs");
const url = require("url");

function myHandler(req,res){
let  myUrl = url.parse(req.url,true);
 console.log(myUrl);
  
  if(myUrl.path === '/favicon.ico') return res.end();
  let log = `${myUrl.path} and this is ${res.method} at ${Date.now() }\n`;
  fs.appendFile("./log.txt" ,log, (err,data)=>{
     switch(myUrl.path){
      case "/":
        if(res.method === "GET")
        res.end("this home page and you are doing get reqest\n");
        break;

      case '/about':
        res.end("this is about section\n");
        break;
        
      case '/signup':
         if(res.method === 'GET')
          res.end("You are singing up");
        else if(res.method === 'POST'){
           //DB query..
           res.end("ok, you are now our user\n");
         }  
     }
  })
}

let myServer = http.createServer(myHandler);
myServer.listen(8081,()=>{console.log('hello perfect')});

  



  