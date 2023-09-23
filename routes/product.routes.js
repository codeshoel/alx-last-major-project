const express = require('express')
const router = express.Router()
const multer = require('multer')
const {authMiddleware} = require('../helpers/security.middleware')
const {fileStorage} = require('../helpers/fileupload.middleware')
const { createProduct, fetchProduct, fetchSingleProduct, fetchProductByCategory, updateProduct, deleteProduct } = require('../controllers/products.controller')

const upload = multer({storage:fileStorage()})

router.route('/product').post(upload.array('file', 4), authMiddleware, createProduct).get(fetchProduct)
router.route('/product/:id').get(fetchSingleProduct).patch(upload.array('file', 4), authMiddleware, updateProduct).delete(authMiddleware, deleteProduct)
router.route('/product/cate/:id').get(fetchProductByCategory)
module.exports = router



