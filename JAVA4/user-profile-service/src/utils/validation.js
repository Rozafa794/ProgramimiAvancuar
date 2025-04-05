const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  
  const isValidPassword = (password) => {
    return password.length >= 6;
  };
  
  module.exports = { isValidEmail, isValidPassword };
  