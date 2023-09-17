const express = require('express');
const router = express.Router();
const { createCategory, fetchCategories, fetchSingleCategory, updateCategories, deleteCategories } = require('../controllers/category.controller');
const {authMiddleware} = require('../helpers/security.middleware')



router.route('/category').post(authMiddleware, createCategory).get(authMiddleware, fetchCategories)
router.route('/category/:id').patch(authMiddleware, updateCategories).get(authMiddleware, fetchSingleCategory).delete(authMiddleware, deleteCategories)

module.exports=router



