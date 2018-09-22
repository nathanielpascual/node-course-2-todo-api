var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email : { 
        type: String,
        required : true,
        trim : true,
        minlength : 20
        }

});

module.exports = {User};