const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/test');
const db=mongoose.connection;
db.on('error',console.error.bind(console,'Error'));
db.once('open',()=>{
    console.log('Successfully');
})