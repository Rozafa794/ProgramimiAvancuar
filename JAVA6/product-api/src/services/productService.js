const supabase = require('../supabaseclient');

exports.getAll = async () => {
  const { data, error } = await supabase.from('products').select('*');
  if (error) throw error;
  return data;
};

exports.getById = async (productId) => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', productId)
    .single();
  if (error) throw error;
  return data;
};

exports.create = async (product) => {
  const { data, error } = await supabase
    .from('products')
    .insert([product])
    .select()
    .single();
  if (error) throw error;
  return data;
};

exports.update = async (productId, updatedProduct) => {
  const { data, error } = await supabase
    .from('products')
    .update(updatedProduct)
    .eq('id', productId)
    .select()
    .single();
  if (error) throw error;
  return data;
};

exports.remove = async (productId) => {
  const { error } = await supabase
    .from('products')
    .delete()
    .eq('id', productId);
  if (error) throw error;
};
