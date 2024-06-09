const express = require("express");
const { getListOfUsers, postUsers, deleteUsers, putUsers } = require("../controllers/users");
const router = express.Router();

// Home page route.
router.get("/users", getListOfUsers);
router.post("/users", postUsers );
router.delete("/users", deleteUsers); 
router.put("/users", putUsers );  

module.exports = router;