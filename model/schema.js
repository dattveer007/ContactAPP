const mongoose=require('mongoose');
const schema=new mongoose.Schema({
    name:{
        type:String    
    },
    phoneno:{
        type:String
    }
});
let  model=new mongoose.model('schema',schema);
module.exports=model;
