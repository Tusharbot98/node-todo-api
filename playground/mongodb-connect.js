const Mongoclient = require('mongodb').MongoClient

Mongoclient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err,client)=>{
    if(err){return console.log('server connection problem')}
    console.log('connected to the mongodb server')

const db = client.db('TodoApp')

// db.collection('todos').insertOne({
//     text:'tetsing data',
//     completetd:false
// },(err,result)=>{

//     if(err){return console.log('collection problem'+err)}
//     console.log(JSON.stringify(result.ops,undefined,2));
// })

db.collection('todos').insertOne({
    name:'Tushar',
    age:20,
    location:'kalyan'
},(err,result)=>{
    if(err){return console.log(' collection problem '+ err)}
    console.log(JSON.stringify(result.ops,undefined,2));
})
client.close();
})