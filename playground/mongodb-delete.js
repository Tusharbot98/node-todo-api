const Mongoclient = require('mongodb').MongoClient

Mongoclient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err,client)=>{
    if(err){return console.log('server connection problem')}
    console.log('connected to the mongodb server')

const db = client.db('TodoApp')

// //deleteMany
// db.collection('todos').deleteMany({name:'Tushar'}).then((result)=>{
//     console.log(result)
// })

// //deleteOne
// db.collection('todos').deleteOne({name:'Tushar'}).then((result)=>{
//     console.log(result)
// })

db.collection('todos').findOneAndDelete({name:'vipul'}).then((result)=>{
    console.log(result)
})


client.close();
})