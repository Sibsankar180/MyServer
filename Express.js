
// everything is built-in here

const express = require("express");

const app = express();

app.get("/",(req,res) =>{
    res.send("you are in homw page\n");
});

app.get("/about",(req,res) =>{
    res.send(`you are in about page ${req.query.name}`);
});

app.listen(8088,()=>{
    console.log("EveryThing is Good\n");
})