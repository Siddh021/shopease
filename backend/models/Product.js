import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: false, unique: true, index: true },
  price: { type: Number, required: true },
  images: [{ type: String }],
  category: { type: String },
  description: { type: String },
  brand: { type: String },
  countInStock: { type: Number, default: 0 },
  rating: { type: Number, default: 0 },
  numReviews: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.model('Product', productSchema);
