const{ObjectID} = require('mongodb');
var mongoose = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {user} = require('./../server/models/user');

var id = '5bc3077adff799143c1cb652';
if(!ObjectID.isValid){
    console.log('id is not valid')
}

// Todo.find({_id:id}).then((todos)=>{console.log(('todos',todos));
// })

// Todo.findOne({_id:id}).then((todos)=>{console.log(('todos',todos));
// })

// Todo.findById(id).then((todos)=>{
//     if(!todos){
//         console.log('id not found')
//     }
//     console.log(('todos',todos));
// })

user.findById(id).then((authen)=>{console.log(authen)}).catch((e)=>{console.log(e)})