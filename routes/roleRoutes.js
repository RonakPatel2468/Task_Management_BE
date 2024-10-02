const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roleController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

// Protected routes for Admins only
router.post('/', authMiddleware, roleMiddleware.isAdmin, roleController.createRole);
router.get('/', authMiddleware, roleMiddleware.isAdmin, roleController.getRoles);
router.get('/:id', authMiddleware, roleMiddleware.isAdmin, roleController.getRoleById);
router.put('/:id', authMiddleware, roleMiddleware.isAdmin, roleController.updateRole);
router.delete('/:id', authMiddleware, roleMiddleware.isAdmin, roleController.deleteRole);

module.exports = router;
