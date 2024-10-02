const express = require('express');
const categoryController = require('../controllers/categoryController'); // Correct import path

const router = express.Router();

// Ensure the controller methods are properly defined and imported
router.post('/', categoryController.createCategory);
router.get('/', categoryController.getCategories);
router.get('/:id', categoryController.getCategoryById);
router.put('/:id', categoryController.updateCategory);
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;
