const mongoose = require('mongoose');

const dbConnect = async ()=>{
    try {
    const res = await mongoose.connect('mongodb://127.0.0.1:27017/megamart');
    if(res)console.log("Connected to mongodb")    
    }catch(err) {
        console.log("connection to db faild")   
    }
 }

 module.exports = dbConnect