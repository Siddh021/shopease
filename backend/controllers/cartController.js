import Cart from '../models/Cart.js';
import Product from '../models/Product.js';

// GET /api/cart  (protected)  -> returns user's cart
export const getCart = async (req, res) => {
  let cart = await Cart.findOne({ user: req.user._id }).populate('items.product');
  if (!cart) cart = { user: req.user._id, items: [] };
  res.json(cart);
};

// POST /api/cart  -> replace cart items
export const upsertCart = async (req, res) => {
  const { items } = req.body; // items: [{ product, quantity }]
  let cart = await Cart.findOne({ user: req.user._id });
  const prepared = [];
  for (const it of items || []) {
    const prod = await Product.findById(it.product);
    if (!prod) continue;
    prepared.push({ product: prod._id, quantity: it.quantity || 1, price: prod.price });
  }
  if (!cart) {
    cart = new Cart({ user: req.user._id, items: prepared });
  } else {
    cart.items = prepared;
    cart.updatedAt = Date.now();
  }
  await cart.save();
  await cart.populate('items.product');
  res.json(cart);
};

// DELETE /api/cart  -> clear
export const clearCart = async (req, res) => {
  await Cart.findOneAndDelete({ user: req.user._id });
  res.json({ message: 'Cart cleared' });
};
