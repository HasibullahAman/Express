const { request, response } = require('express');
const express = require('express');

const app = express();

app.get("/",function(req,res){
    // console.log(request)
    res.send('<h1>Hello World!</h1>')
})

app.get('/contact',function(req,res){
    res.send('<h1>Hi Im Contact page</h1>')
})
app.get('/hobies',function(req,res){
    res.send('<h1>Hi Im Contact page</h1>')
})
app.listen(3000,function(){
    console.log('Hello from lissten server port: 3000')
})