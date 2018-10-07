var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI ,{ useNewUrlParser: true },(error)=>{
    //console.log(error);
});

module.exports = {mongoose}

//process.env.NODE_ENV === 'production'