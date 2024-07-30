const express = require('express');
const router = express.Router();
const { signUp, signIn } = require('../controllers/authController');

/**
 * @openapi
 * /auth/signup:
 *   post:
 *     summary: Sign up a new user
 *     description: Create a new user with a first name, last name, email, and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */
router.post('/signup', signUp);

/**
 * @openapi
 * /auth/signin:
 *   post:
 *     summary: Sign in a user
 *     description: Authenticate a user and return a token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful sign in
 *       400:
 *         description: Invalid email or password
 *       500:
 *         description: Server error
 */
router.post('/signin', signIn);

module.exports = router;
