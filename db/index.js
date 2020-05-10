var mongoose = require('mongoose');
mongoose.set('useFindAndModify', false)
// mongoose.connect('mongodb://47.107.182.109/stdbreak');
mongoose.connect('mongodb://139.224.131.108/culture', { 
    useNewUrlParser: true ,
    useUnifiedTopology: true
},(err,res)=>{
    if(err){
        console.log(err)
    }
})
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


