// routes/protectedRoutes.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const someProtectedController = require('../controllers/someProtectedController');

router.get('/protected', authMiddleware, someProtectedController.someFunction);

module.exports = router;
