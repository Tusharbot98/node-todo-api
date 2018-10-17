const jwt =require('jsonwebtoken')

var data={
    id:10
};

var token = jwt.sign(data,'tushar');
console.log(token)

var decoded= jwt.verify(token,'tushar');
console.log(decoded);