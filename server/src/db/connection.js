// getting-started.js
const mongoose = require('mongoose');

const dbconnect = async()=> {
    try{
      const res =  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
    if(res) console.log("connected to mongodb")  
    } catch(err){
        console.log("connection to db failed")
        
    }  

}
module.exports = dbconnect