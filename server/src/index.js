const express = require('express')
const app = express()
const port = 3000
const productsRoute = require('./routes/products')
const dbconnect = require('./db/connection')


app.use(productsRoute)

app.listen(port, () => {
  console.log('Example app listening on port ${port}')
})