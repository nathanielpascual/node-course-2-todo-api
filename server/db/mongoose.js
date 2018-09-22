var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(error)=>{
    //console.log(error);
});

module.exports = {mongoose}