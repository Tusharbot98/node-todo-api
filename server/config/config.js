var env=process.env.NODE_ENV || 'development';

if(env === 'development'){
    process.env.PORT=300;
    process.env.MONGODB_URL='mongodb://localhost:27017/TodoApp';
}else if(env==='test'){
    process.env.PORT=300;
    process.env.MONGODB_URL='mongodb://localhost:27017/TodoAppTest';
}
