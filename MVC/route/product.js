// library 
var express = require('express');
var router = express.Router();
// panggil controller product
const productsController = require('../controller/product');

// /product/add-product
/* GET users listing. */
router.get('/', productsController.getviewProduct);
router.post('/add-product', productsController.postAddProduct);
router.get('/get-all', productsController.getProducts)

module.exports = router