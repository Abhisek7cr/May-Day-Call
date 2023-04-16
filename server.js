const express = require("express");
const app = express();


app.get("/",function(req,res){
    res.sendFile(__dirname+"/PRACTISE.html")
})

app.get("/contact",function(req,res){
    res.sendFile(__dirname+"/contact.html")
})

app.get("/indexcvd",function(req,res){
    res.sendFile(__dirname+"/indexcvd.html")
})




app.get("/app",function(req,res){
    res.sendFile(__dirname+"/app.html")
})


app.get("/bmifit",function(req,res){
    res.sendFile(__dirname+"/bmifit.html")
})

app.get("/cards",function(req,res){
    res.sendFile(__dirname+"/cards.html")
})

app.get("/cardsdoc",function(req,res){
    res.sendFile(__dirname+"/cardsdoc.html")
})

app.get("/costum",function(req,res){
    res.sendFile(__dirname+"/costum.html")
})

app.get("/index4",function(req,res){
    res.sendFile(__dirname+"/index4.html")
})

app.get("/packgod",function(req,res){
    res.sendFile(__dirname+"/packgod.html")
})

app.get("/keycaps",function(req,res){
    res.sendFile(__dirname+"/keycaps.html")
})

app.get("/lg",function(req,res){
    res.sendFile(__dirname+"/lg.html")
})

app.get("/login1",function(req,res){
    res.sendFile(__dirname+"/login1.html")
})

app.get("/switches",function(req,res){
    res.sendFile(__dirname+"/switches.html")
})

app.get("/vents",function(req,res){
    res.sendFile(__dirname+"/vents.html")
})


app.listen(3000,function(){
    console.log("port is litening at 3000 port");
});