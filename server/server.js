const express= require('express')
const bodyparser = require('body-parser')

var {moongoose} = require('./db/mongoose')
var {Todo} = require('./models/todo')
var {User} = require('./models/user')

var app =express();

app.use(bodyparser.json())

app.post('/todos',(req,res)=>{
    var todo =new Todo({
        text:req.body.text
    })

    todo.save().then(
        (doc)=>{res.send(doc)} ,
        (err)=>{res.status(400).send(err);});}



)


app.listen(3000,()=>{
    console.log('server running on port 3000')
})



// var myTodo = new Todo({text:'work hard ',completed:false,completedAt:1244});
// var firstUser = new user({text:'tushar.nadkar98@gmail.com'});

// myTodo.save().then(
//     (doc)=>{console.log(JSON.stringify(doc,undefined,2))},
//     (err)=>{console.log(err);});
// firstUser.save().then(
//     (result)=>{console.log(JSON.stringify(result))},
//     (err)=>{console.log(err)});