// // const {req,res} = require('express');
// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(bodyParser.urlencoded({extended:true}));

// app.get('/', function(req, res){
//     // res.send('<h1>Hello World</h1>');
//     res.sendFile(__dirname + '/index.html')
// })
// app.post('/',function(req,res){
//     // console.log(req.body)
// var num1 = Number(req.body.num1);
// var num2 = Number(req.body.num2);

// var result = num1 + num2;

// res.send("Result is: " + result);
// })

// app.listen(3000,function(){
//     console.log('Express server listening on port:3000')
// })

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({
    extended:true
}));


app.get('/',function(req,res){
    res.sendFile(__dirname,'/bmiCalculator.html')
})

app.post('/',function(req,res){

    var height = Number(req.body.height);
    var width = Number(req.body.width);


    var result = height*width;


    res.send('The result are calulated by bmiCalulator server and is: ' + result);

    
})


app.listen(3000,function(){
    console.log('Express servers Listening on port 3000: ')
})