exports.getAllProducts = async (req, res) => {
    try {
      const products = await productService.getAll();
      res.json(products);
    } catch (err) {
      res.status(500).send(err.message);
    }
  };
  
  // Të tjerat po ashtu – të gjitha funksionet duhet të jenë `async`
  