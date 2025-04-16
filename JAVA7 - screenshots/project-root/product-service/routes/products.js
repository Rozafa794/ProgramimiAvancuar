const express = require('express');
const router = express.Router();

const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productsController');

const authenticate = require('../middleware/authMiddleware');

router.get('/products', authenticate, getProducts);
router.post('/products', authenticate, createProduct);
router.put('/products/:id', authenticate, updateProduct);
router.delete('/products/:id', authenticate, deleteProduct);

module.exports = router;
