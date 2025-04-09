const jwt = require('jsonwebtoken');
const { findUserByEmail } = require('../services/userService');
const { comparePassword } = require('../utils/passwordUtils');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Merr përdoruesin nga Supabase
    const user = await findUserByEmail(email);

    // Nëse nuk ekziston ose fjalëkalimi është i gabuar
    if (!user || !(await comparePassword(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Krijo token JWT
    const token = jwt.sign({ email: user.email }, 'sekret', { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { login };
