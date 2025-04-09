const supabase = require('../utils/supabaseClient');
const bcrypt = require('bcrypt');

// Create a new user and store in Supabase
const createUser = async (user) => {
  const hashedPassword = await bcrypt.hash(user.password, 10);

  const { data, error } = await supabase
    .from('users')
    .insert([{
      email: user.email,
      password: hashedPassword,
      name: user.name || null,
      address: user.address || null,
      registration_date: new Date()
    }])
    .select();

  if (error) throw new Error(error.message);
  return data[0];
};

// Find user in Supabase by email
const findUserByEmail = async (email) => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .single();

  if (error) throw new Error(error.message);
  return data;
};

module.exports = { createUser, findUserByEmail };
