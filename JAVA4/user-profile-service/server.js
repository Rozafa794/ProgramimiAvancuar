const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const userRoutes = require('./src/routes/userRoutes');
const authRoutes = require('./src/routes/authRoutes');

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

app.get('/health', (req, res) => {
  res.json({ message: 'User Profile Service is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

  