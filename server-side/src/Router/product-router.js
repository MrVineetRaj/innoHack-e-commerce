const express = require("express");
const router = express();
const Product = require("../models/products-model")

console.log("Router is on !")

router.get('/getProduct',async (req,res)=>{
  try{
    console.log("Req made!");
      const products = await Product.find({})
      res.send(products);
  }
  catch(e){
      res.status(500);
  }
})


module.exports = router;