const express = require('express');
const app = express();
const productRoutes = require('./src/routes/productRoutes');

// Middleware për të lexuar JSON
app.use(express.json());

// Rruga bazë për produktet
app.use('/products', productRoutes);

// Porti ku do të dëgjojë API-ja
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
