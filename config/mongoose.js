const mongoose = require('mongoose'); // momgoose required
// require('dotenv').config();
// const database = process.env.DB_URL

// mongoose.connect(database); 
mongoose.connect('mongodb+srv://shivanikri:shivani123@cluster0.zlajqmm.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family:4,
  });
 
const db = mongoose.connection; //made conection to mongoose
// console.log(database);
db.on('error',console.error.bind(console, "Error connection to mongodb"));
db.once('open',function(){
    //if connected successfully
    console.log('connected to database :: MongoDB');
});
module.exports = db;