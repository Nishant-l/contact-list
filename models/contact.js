const mongoose=require('mongoose');

const contactSchima = new mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    contact_no:{
        type:String,
        required:true
    }
})

const Contact = mongoose.model('Contact',contactSchima);

module.exports = Contact;