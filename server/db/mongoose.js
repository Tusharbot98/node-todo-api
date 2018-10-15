var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URL ||'mongodb://tushar:tu01sh04ar1998@ds131983.mlab.com:31983/todoapp',{ useNewUrlParser: true },(err)=>{
    console.log("connection error + " + err)
});
module.exports={
    mongoose
}