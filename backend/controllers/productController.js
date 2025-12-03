import Product from '../models/Product.js';

// GET /api/products
export const getProducts = async (req, res) => {
  const q = req.query.q || '';
  const category = req.query.category;
  const filter = {};
  if (q) filter.name = { $regex: q, $options: 'i' };
  if (category) filter.category = category;
  const products = await Product.find(filter).limit(100);
  res.json(products);
};

// GET /api/products/:id
export const getProductById = async (req, res) => {
  const prod = await Product.findById(req.params.id);
  if (!prod) return res.status(404).json({ message: 'Product not found' });
  res.json(prod);
};

// POST /api/products
export const createProduct = async (req, res) => {
  const body = req.body;
  const p = new Product(body);
  await p.save();
  res.status(201).json(p);
};

// PUT /api/products/:id
export const updateProduct = async (req, res) => {
  const prod = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!prod) return res.status(404).json({ message: 'Product not found' });
  res.json(prod);
};

// DELETE /api/products/:id
export const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: 'Product removed' });
};
