const jwt = require('jsonwebtoken');
const { findUserByEmail } = require('../services/userService');
const { comparePassword } = require('../utils/passwordUtils');

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = findUserByEmail(email);

  if (!user || !(await comparePassword(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ email: user.email }, 'sekret', { expiresIn: '1h' });
  res.json({ token });
};

module.exports = { login };
