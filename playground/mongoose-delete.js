const{ObjectID} = require('mongodb');
var mongoose = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {user} = require('./../server/models/user');


Todo.findByIdAndRemove('5bc42afeea069f23d0a9453e').then(
    
    (result)=>{console.log({result});}
    
    )