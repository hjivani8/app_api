const mongoose = require('mongoose');

const educationschema = new mongoose.Schema({

    course:{
        type:String
    },
    school:{
        type:String
    },
    grade:{
        type:String
    },
    year:{
        type:Number
    }

});

const education = new mongoose.model('education',educationschema);

module.exports = education;