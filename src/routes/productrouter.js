const express = require('express');
const { getProducts , DeleteProducts , EditProducts , createProduct} = require('../controller/productcontroller.js');
// const {createProductController} = require('../controller/productController/createProductController.js')

const router = express.Router();

router.post("/addproduct", createProduct);
router.get("/getProducts", getProducts)
router.delete('/DeleteProducts/:id', DeleteProducts)
router.put('/EditProducts/:id', EditProducts)



module.exports = router;


