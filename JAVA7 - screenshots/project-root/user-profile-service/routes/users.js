const express = require('express');
const router = express.Router();
const { register, login, profile } = require('../controllers/usersController');
const authenticate = require('../auth/authMiddleware');

// Rrutat
router.post('/register', register);
router.post('/auth/login', login);
router.get('/users/me', authenticate, profile); // 🟢 kjo është ruta që mungon!

module.exports = router;
