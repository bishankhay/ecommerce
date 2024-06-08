const express = require("express");
const { getListOfProducts, postProducts, deleteProduct, putProducts } = require("../controllers/products");
const router = express.Router();

// Home page route.
router.get("/products", getListOfProducts);
router.post("/products", postProducts );
router.delete("/products", deleteProduct); 
router.put("/products", putProducts );  

module.exports = router;