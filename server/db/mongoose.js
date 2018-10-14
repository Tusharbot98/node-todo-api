var moongoose = require('mongoose')

moongoose.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true });
module.exports={
    moongoose
}