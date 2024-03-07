require('./src/database/mongoose-conn');

const cors = require("cors");

const express = require("express");
const productRouter= require('./src/Router/product-router')

const app = express();

app.use(cors());

const uri = "http://127.0.0.1"
const port = 3000;

app.use(productRouter);
app.listen(port,() => {
  console.log(`Server is up at ${uri}:${port}`);
})