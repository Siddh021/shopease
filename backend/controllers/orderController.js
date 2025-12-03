import Order from '../models/Order.js';
import Cart from '../models/Cart.js';

export const createOrder = async (req, res) => {
  const { shippingAddress, paymentMethod } = req.body;
  const cart = await Cart.findOne({ user: req.user._id }).populate('items.product');
  if (!cart || !cart.items.length) return res.status(400).json({ message: 'Cart is empty' });

  const items = cart.items.map(i => ({
    product: i.product._id,
    name: i.product.name,
    qty: i.quantity,
    price: i.price,
    image: (i.product.images && i.product.images[0]) || ''
  }));

  const itemsPrice = items.reduce((s, it) => s + it.qty * it.price, 0);
  const shippingPrice = 0;
  const taxPrice = 0;
  const totalPrice = itemsPrice + shippingPrice + taxPrice;

  const order = new Order({
    user: req.user._id,
    orderItems: items,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice
  });
  await order.save();
  // optional: clear cart
  await Cart.findOneAndDelete({ user: req.user._id });
  res.status(201).json(order);
};

export const getOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
  res.json(orders);
};
