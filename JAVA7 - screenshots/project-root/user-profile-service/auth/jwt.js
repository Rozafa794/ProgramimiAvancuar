const jwt = require('jsonwebtoken');
const secret = "sekret_jwt"; // përdor .env në projekte reale

function generateToken(user) {
  return jwt.sign({ id: user.id, email: user.email }, secret, { expiresIn: '1h' });
}

function verifyToken(token) {
  return jwt.verify(token, secret);
}

module.exports = { generateToken, verifyToken };
