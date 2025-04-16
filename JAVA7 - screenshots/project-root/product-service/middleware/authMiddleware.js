const jwt = require('jsonwebtoken');
const secret = "sekret_jwt"; // e njëjta që përdor në jwt.js

const authenticate = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: "Token mungon" });
  }

  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ error: "Token i pavlefshëm" });
  }
};

module.exports = authenticate;
