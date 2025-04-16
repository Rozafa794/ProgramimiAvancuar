const supabase = require('../utils/supabaseClient');
const { generateToken } = require('../auth/jwt');

// REGISTER - POST /users
const register = async (req, res) => {
  const { email, password } = req.body;

  // Kontrollo nëse ekziston user-i
  const { data: existingUser } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .single();

  if (existingUser) {
    return res.status(400).json({ error: "Ky email është i regjistruar" });
  }

  // Regjistro userin
  const { data, error } = await supabase
    .from('users')
    .insert([{ email, password }])
    .select();

  if (error) return res.status(500).json({ error: error.message });

  const token = generateToken({ id: data[0].id, email });
  res.status(201).json({ message: "User u regjistrua", token });
};

// LOGIN - POST /auth/login
const login = async (req, res) => {
  const { email, password } = req.body;

  const { data: user, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .eq('password', password)
    .single();

  if (error || !user) {
    return res.status(401).json({ error: "Email ose password gabim" });
  }

  const token = generateToken({ id: user.id, email: user.email });
  res.json({ message: "Kyqja me sukses", token });
};

// PROFILE - GET /users/me
const profile = (req, res) => {
  res.json({ user: req.user });
};

module.exports = { register, login, profile };
