const mongoose = require('mongoose');

mongoose.set('bufferCommands', false);

const dbConnect = async ()=>{
    try {
    const res = await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
    if (res) console.log("Connected to mongodb")    
    }catch(error) {
         handleError(error);
    }
 }


 module.exports = dbConnect