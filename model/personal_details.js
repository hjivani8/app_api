const mongoose = require('mongoose');

const personalschema = new mongoose.Schema({

    name:{
        type:String
    },
    address:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:Number
    }

});

const personal = new mongoose.model('personal',personalschema);

module.exports = personal;