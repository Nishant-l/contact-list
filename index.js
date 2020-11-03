const express=require('express');
const path=require('path')
const port=8000;


const app=express()


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'files'));
app.use(express.urlencoded())

var Contact=[{name:'abc',contact_no:'12'},{name:'uvw',contact_no:'23'},{name:'xyz',contact_no:'34'}];

app.get('/',function(req,res){
    return res.render('home',{title:'Contact-List',contactList:Contact})
});

app.post('/addContact',function(req,res){
    Contact.push(req.body);
    res.redirect('back');

})


app.listen(port,function(err){
    if(err){
        console.log('error ocured',err)
    }
    console.log('Server up and running on port ',port)
})