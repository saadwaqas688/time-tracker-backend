// utils/authUtils.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Secret key for JWT (keep this secure and change in production)
const JWT_SECRET = 'your_secret_key'; // Change this to an environment variable in production
const JWT_EXPIRATION = '1h'; // Token expiration time

// Hash a password using bcrypt
const hashPassword = async (password) => {
  const saltRounds = 10; // You can adjust the salt rounds
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

// Compare a plain password with a hashed password
const comparePassword = async (password, hashedPassword) => {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
};

// Generate a JWT for a user
const generateToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
  };
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
};

// Verify a JWT
const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null; // Token verification failed
  }
};

module.exports = {
  hashPassword,
  comparePassword,
  generateToken,
  verifyToken,
};
