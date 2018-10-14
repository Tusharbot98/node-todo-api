const Mongoclient = require('mongodb').MongoClient

Mongoclient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err,client)=>{
    if(err){return console.log('server connection problem')}
    console.log('connected to the mongodb server')

const db = client.db('TodoApp')

// db.collection('todos').findOneAndUpdate({text:'testing data'},{$set:{completed:true}},{returnOriginal:false}).then((result)=>{
//     console.log(result)
// })

db.collection('todos').findOneAndUpdate({name:'Tushar'},{$set:{location:'thana'},
$inc: { age: 3 }},{returnOriginal:false}).then((result)=>{
    console.log(result)
})



client.close();
})