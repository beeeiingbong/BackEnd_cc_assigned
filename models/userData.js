const mongoose =require('mongoose');

const UserData = new mongoose.Schema({
    username:{
        type:String,
        trim:true,
    },
    backgroundColor:{
        type:String,
        trim:true,
    },
    fontSize:{
        type:String,
        trim:true,
    }
    
})

module.exports = mongoose.model('UserData' , UserData);