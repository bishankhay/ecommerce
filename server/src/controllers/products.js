const Product = require('../models/Products')
const getListOfProducts = async (req, res) => {
   const data = await Product.find()
   res.send(data)
  }

const postProducts = function (req, res) {
  Product.create(req.body)
  res.send("Ok")
  }

const deleteProduct = function (req, res) {
    res.send("Wiki home page");
  }    
const putProducts = function (req, res) {
    res.send("Wiki home page");
  }  

 module.exports= {getListOfProducts, postProducts, deleteProduct, putProducts} 