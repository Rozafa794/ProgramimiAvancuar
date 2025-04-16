const express = require('express');
const app = express();
app.use(express.json());

const userRoutes = require('./routes/users');
app.use('/', userRoutes);

app.listen(3000, () => {
  console.log('User service running on port 3000');
});
