const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  userName: String, // String is shorthand for {type: String}
  password: String,
  firstName: String,
  lastName:String,
  
});

const Users = mongoose.model('Product', userSchema);
module.exports= Users