const supabase = require('../utils/supabaseClient');

// GET /products
const getProducts = async (req, res) => {
  const { data, error } = await supabase
    .from('products')
    .select('*');

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json({
    message: "Produktet",
    user: req.user,
    products: data
  });
};

// POST /products
// POST /products
const createProduct = async (req, res) => {
    const { name, price } = req.body;
  
    const { data, error } = await supabase
      .from('products')
      .insert([{ name, price }])
      .select(); // kjo e sjell produktin e futur
  
    if (error || !data || data.length === 0) {
      return res.status(500).json({ error: error?.message || "Produkti nuk u shtua" });
    }
  
    res.status(200).json({
      message: "Produkti u shtua",
      product: data[0]
    });
  };
  
// PUT /products/:id
const updateProduct = async (req, res) => {
  const id = parseInt(req.params.id);
  const { name, price } = req.body;

  const { data, error } = await supabase
    .from('products')
    .update({ name, price })
    .eq('id', id)
    .select(); // e marrim produktin e përditësuar

  if (error || data.length === 0) {
    return res.status(404).json({ error: "Produkti nuk u përditësua ose nuk u gjet" });
  }

  res.json({ message: "Produkti u përditësua", product: data[0] });
};

// DELETE /products/:id
const deleteProduct = async (req, res) => {
  const id = parseInt(req.params.id);

  const { data, error } = await supabase
    .from('products')
    .delete()
    .eq('id', id)
    .select();

  if (error || data.length === 0) {
    return res.status(404).json({ error: "Produkti nuk ekziston ose nuk u fshi" });
  }

  res.json({ message: "Produkti u fshi", product: data[0] });
};

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct
};
