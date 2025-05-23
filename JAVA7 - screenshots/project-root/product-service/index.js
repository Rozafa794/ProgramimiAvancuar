const express = require('express');
const app = express();
app.use(express.json());

const productRoutes = require('./routes/products');
app.use(productRoutes);

app.listen(3001, () => {
  console.log('Product service running on port 3001');
});
