const mongoose = require('mongoose');


const  userSchema = new mongoose.Schema({


    name:{
        type:String,
        trim:true,
        required:true
    },

    email:{
        type:String,
        trim:true,
        required:true
    },

    password:{
        type:String,
        type:true,
        required:true
    },


    isVerified:{
        type:Boolean,
        default:false,
    }


})


const userModel = mongoose.model('User',userSchema);


module.exports = userModel