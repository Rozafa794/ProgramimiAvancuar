const express = require('express');
const router = express.Router();
const { register, getProfile } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', register);
router.get('/profile', authMiddleware, getProfile);

module.exports = router;
