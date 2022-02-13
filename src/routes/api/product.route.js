const express = require('express');
const { productController } = require('../../controllers');
const router = express.Router();

router.get('/',productController.getProducts);
router.post('/add',productController.createProduct);
router.get('/:productId',productController.getProduct);
router.patch('/edit/:productId',productController.updateProduct);
router.delete('/delete/:productId',productController.deleteProduct);

module.exports = router;
