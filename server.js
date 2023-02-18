const { request, response } = require('express');
const express = require('express');

const app = express();

app.get("/",function(request,response){
    // console.log(request)
    response.send('<h1>Hello World!</h1>')
})

app.listen(3000,function(){
    console.log('Hello from lissten server port: 3000')
})