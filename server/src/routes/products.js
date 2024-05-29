const express = require("express");
const { getListOfProducts, postProduct, putProduct, deleteProduct } = require("../controllers/products");
const router = express.Router();

// Home page route.
router.get("/product", getListOfProducts);

// About page route.
router.put("/product", putProduct);
router.post("/product", postProduct);
router.delete("/product", deleteProduct);

module.exports = router;