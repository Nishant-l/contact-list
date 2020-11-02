const express=require('express');
const path=require('path')
const port=8000;


const app=express()


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'files'));

app.get('/',function(req,res){
    return res.render('home',{title:'Contact-List'})
});


app.listen(port,function(err){
    if(err){
        console.log('error ocured',err)
    }
    console.log('Server up and running on port ',port)
})