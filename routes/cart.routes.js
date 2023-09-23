const express = require('express')
const router = express.Router();
const {authMiddleware} = require('../helpers/security.middleware')
const { addItem, fetchItems, deleteItem, updateItem } = require('../controllers/cart.controller')



router.route('/cart').get(authMiddleware, fetchItems)
router.route('/cart/:id').post(authMiddleware, addItem).delete(authMiddleware, deleteItem)
router.route('/cart/:id/:qty').patch(authMiddleware, updateItem)

module.exports = router;
