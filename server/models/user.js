var moongoose = require('mongoose')
var user = moongoose.model('authentication',{
    text:{type:String,
        required:true,
        minlength:1,
        trim:true
    }
})

module.exports={
    user
}