const express=require('express');
const path=require('path')
const port=8000;


const app=express()


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'files'));
app.use(express.urlencoded());
app.use(express.static('assets'));

var Contact=[];

app.get('/',function(req,res){
    return res.render('home',{title:'Contact-List',contactList:Contact})
});

app.post('/addContact',function(req,res){
    Contact.push(req.body);
    res.redirect('back');

})

app.get('/dc/:contact_no',function(req,res){
    let index_pos=Contact.findIndex(Contact => Contact.contact_no==req.params.contact_no)
    if(index_pos!=-1){
        Contact.splice(index_pos,1)
    }
    res.redirect('back');

});


app.listen(port,function(err){
    if(err){
        console.log('error ocured',err)
    }
    console.log('Server up and running on port ',port)
})