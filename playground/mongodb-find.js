const Mongoclient = require('mongodb').MongoClient

Mongoclient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err,client)=>{
    if(err){return console.log('server connection problem')}
    console.log('connected to the mongodb server')

const db = client.db('TodoApp')

// db.collection('todos').find({location:'kalyan'}).toArray().then(
// (docs)=>{
//     console.log('todos')
//     console.log(JSON.stringify(docs,undefined,2))
// }
// ),(err)=>{console.log(err)}

// db.collection('todos').find().count().then(
//     (count)=>{
//         console.log(count)  
//     }
//     ),(err)=>{console.log(err)}


db.collection('todos').find({name:'Tushar'}).count().then(
    (count)=>{
        console.log(count)  
    }
    ),(err)=>{console.log(err)}


client.close();
})