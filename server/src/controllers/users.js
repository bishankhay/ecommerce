const Users = require('../models/users')
const getListOfUsers = async (req, res) => {
   const data = await Users.find()
   res.send(data)
  }

const postUsers = function (req, res) {
  Users.create(req.body)
  res.send("User Registration Has Done")
  }

const deleteUsers = function (req, res) {
    res.send("User Has Deleted");
  }    
const putUsers = function (req, res) {
    res.send("Update Has Done");
  }  

 module.exports= {getListOfUsers, postUsers, deleteUsers, putUsers} 