const exp=require('express');
const db=require('./config/mongoose.js')
const schema=require('./model/schema.js')
const path=require('path');
const portno=3000;
const app=exp();
let contacts=[];
app.use(exp.urlencoded());
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.get('/delete/',(req,res)=>{
    let id=req.query.id;
        schema.findByIdAndDelete(id,(err)=>{
            if(err){
                console.log(err);
                return;
            }
            return res.redirect('back');
        })
});
app.get('/',(req,res)=>{
  
    return res.render('home');
});
app.get('/contact',(req,res)=>{
    schema.find({},(err,contact)=>{
        if(err){
            console.log(err);
            return;
        }
        contacts=contact;
    })
    return res.render('contactview',{
        contact_list:contacts
    });
});
app.post('/create-contact',(req,res)=>{
    schema.create({
        name:req.body.name,
        phoneno:req.body.phoneno
    },(err,contact )=>{
        if(err){
            console.log(err);
            return;
        }

        return res.redirect('/contact');

    });

});
app.listen(portno,(err)=>{
    if(err){
        console.log('Error');
        return;
    }
    console.log(`Server is running at Port no=${portno}`);

})