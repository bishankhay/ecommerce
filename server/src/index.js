const express = require('express');
const app = express();
const port = 4000;
const productRoute = require ('./routes/products');
const dbConnect = require('./db/connection');
dbConnect()
app.use(express.json())
app.use(productRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})