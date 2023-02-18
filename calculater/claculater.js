const {request,response} = require('express');
const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.send('<h1>Hello World</h1>');
})

app.listen(3000,function(){
    console.log('Express server listening on port:3000')
})