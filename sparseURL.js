const http = require("http");
const fs = require("fs");
const url =require("url");

http.createServer((req, res) => {
  myUrl = url.parse(req.url,true);
  
  if(myUrl.pathname === "/favicon.ico") return res.end() ;
  log = `${Date.now()} : ${myUrl.pathname} request received\n`;

    fs.appendFile("./log.txt",log,(err,data) =>{

      switch(myUrl.pathname){
       case "/" :
         res.write("HOME PAGE");
         break;
        case '/search':
          search = myUrl.query.search_thing;
          res.write(`This is your search content ${search}`);
          break;
        case '/name':
          name = myUrl.query.name;
          res.write(`hello ${name} how are you?`);
          break;

        default: res.write("404 not found\n");  
          

      }
      res.end();
    })
     

  }).listen(8088, () =>{console.log("all good")});


  



  