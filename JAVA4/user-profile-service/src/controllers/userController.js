const { hashPassword } = require('../utils/passwordUtils');
const { isValidEmail, isValidPassword } = require('../utils/validation');
const { createUser, findUserByEmail } = require('../services/userService');

const register = async (req, res) => {
  const { email, password } = req.body;

  if (!isValidEmail(email) || !isValidPassword(password)) {
    return res.status(400).json({ message: 'Invalid input' });
  }

  if (findUserByEmail(email)) {
    return res.status(409).json({ message: 'User already exists' });
  }

  const hashedPassword = await hashPassword(password);
  const newUser = createUser({ email, password: hashedPassword });

  res.status(201).json({ message: 'User registered', user: { email: newUser.email } });
};

const getProfile = (req, res) => {
  res.json({ email: req.user.email });
};

module.exports = { register, getProfile };
