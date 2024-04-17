const express = require('express');
const productController = require('../controller/productcontroller.js')

const router = express.Router();

router.post("/addproduct", productController.createProduct);

module.exports = router;
