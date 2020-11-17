const express=require('express');
const path=require('path')
const port=8000;


const db=require('./config/mongoose');
const Contact = require('./models/contact');

const app=express()


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'files'));
app.use(express.urlencoded());
app.use(express.static('assets'));

var Contacttt=[];

app.get('/',function(req,res){


Contact.find({},function(err,contacts){

    if(err){
        console.log('error in fatching contact from db');
        return;
    }
    return res.render('home',{title:'Contact-List',contactList:contacts})
})
});

app.post('/addContact',function(req,res){
    // Contact.push(req.body);
    Contact.create({
        name:req.body.name,
        contact_no:req.body.contact_no
    },function(err,newContact){
        if(err){console.log('err in creating contact');return};

        console.log('*******',newContact);
        res.redirect('back');
    })
    
    // res.redirect('back');

})

app.get('/dc/:contact_no',function(req,res){

    var id=req.params.contact_no;
    console.log(id);
    Contact.findByIdAndDelete(id,function(err){
        if(err){
            return console.log('error occured')
        }
        return res.redirect('back');
    })





    // let index_pos=Contact.findIndex(Contact => Contact.contact_no==req.params.contact_no)
    // if(index_pos!=-1){
    //     Contact.splice(index_pos,1)
    // }
    // res.redirect('back');

});


app.listen(port,function(err){
    if(err){
        console.log('error ocured',err)
    }
    console.log('Server up and running on port ',port)
})