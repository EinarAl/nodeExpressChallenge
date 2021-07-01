const express = require('express');

const app = express();

const port = 3000;

app.get('/about', function(req,res){
    console.log(__dirname);
    console.log(__dirname + '/pages/about.html')
    res.sendFile(__dirname + '/pages/about.html');
})
app.get('/contact', function(req,res){
    console.log(__dirname);
    console.log(__dirname + '/pages/contact.html')
    res.sendFile(__dirname + '/pages/contact.html');
    res.sendStatus(401);
})
app.get('/home', function(req,res){
    console.log(__dirname);
    console.log(__dirname + '/pages/index.html')
    res.sendFile(__dirname + '/pages/index.html');
})
app.post('/home', function(req,res){
    res.send("post() successful");
})
app.listen(port,function(){
    console.log('Listening at port: ' + port)
});