const { hashPassword } = require('../utils/passwordUtils');
const { isValidEmail, isValidPassword } = require('../utils/validation');
const { createUser, findUserByEmail } = require('../services/userService');

const register = async (req, res) => {
  try {
    const { email, password, name, address } = req.body;

    // Validimi i të dhënave
    if (!isValidEmail(email) || !isValidPassword(password)) {
      return res.status(400).json({ message: 'Invalid input' });
    }

    // Kontrollo nëse ekziston përdoruesi
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    // Hash password dhe krijo përdoruesin
    const hashedPassword = await hashPassword(password);
    const newUser = await createUser({
      email,
      password: hashedPassword,
      name,
      address,
    });

    res.status(201).json({ message: 'User registered', user: { email: newUser.email } });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProfile = (req, res) => {
  res.json({ email: req.user.email });
};

module.exports = { register, getProfile };
