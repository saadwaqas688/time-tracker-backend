// middleware/authMiddleware.js
const authUtils = require('../utils/authUtils');

const authenticate = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const decoded = authUtils.verifyToken(token);

  if (!decoded) {
    return res.status(401).json({ error: 'Invalid token' });
  }

  req.user = decoded; // Attach decoded token to the request
  next();
};

module.exports = authenticate;
