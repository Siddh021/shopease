import Wishlist from '../models/Wishlist.js';
import Product from '../models/Product.js';

export const getWishlist = async (req, res) => {
  let w = await Wishlist.findOne({ user: req.user._id }).populate('items');
  if (!w) w = { user: req.user._id, items: [] };
  res.json(w);
};

export const toggleWishlist = async (req, res) => {
  // POST body: { productId }
  const { productId } = req.body;
  const prod = await Product.findById(productId);
  if (!prod) return res.status(404).json({ message: 'Product not found' });
  let w = await Wishlist.findOne({ user: req.user._id });
  if (!w) {
    w = new Wishlist({ user: req.user._id, items: [prod._id] });
  } else {
    const idx = w.items.findIndex(i => i.toString() === prod._id.toString());
    if (idx === -1) w.items.push(prod._id);
    else w.items.splice(idx, 1);
  }
  await w.save();
  await w.populate('items');
  res.json(w);
};
