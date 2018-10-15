const express= require('express')
const {ObjectID}=require('mongodb')
const bodyparser = require('body-parser')
var {moongoose} = require('./db/mongoose')
var {Todo} = require('./models/todo')
var {User} = require('./models/user')

var app =express();
const port = process.env.PORT || 3000;

app.use(bodyparser.json())

app.post('/todos',(req,res)=>{
    var todo =new Todo({
        text:req.body.text
    })

    todo.save().then(
        (doc)=>{res.send(doc)} ,
        (err)=>{res.status(400).send(err);});}
        
)

app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
        res.send({todos})
    }),(e)=>{res.status(400).send(e)}
})

app.get('/todos/:id',(req,res)=>{
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
      return res.status(404).send();
    }

    Todo.findById(id).then((result)=>{
        if(!result){res.status(404).send();}
        res.send({result})})
        .catch((e)=>{res.status(400).send()})
})

app.delete('/todos/:id',(req,res)=>{
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
      return res.status(404).send();
    }

    Todo.findByIdAndDelete(id).then((result)=>{
        if(!result){res.status(404).send();}
        res.send({result})})
        .catch((e)=>{res.status(400).send()})
})

app.listen(port,()=>{
    console.log(`server running on port 3000`)
})

module.exports={app}
