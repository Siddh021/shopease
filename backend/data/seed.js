import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from '../config/db.js';
import User from '../models/User.js';
import Product from '../models/Product.js';
import bcrypt from 'bcryptjs';
dotenv.config();
connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();

    const user = new User({
      name: 'Demo User',
      email: 'demo@example.com',
      password: await bcrypt.hash('password', 10),
      isAdmin: true
    });
    await user.save();

    const products = [
      { name: 'Sample Product 1', price: 99.99, images: ['/uploads/sample1.jpg'], category: 'Electronics', description: 'Nice product', countInStock: 10 },
      { name: 'Sample Product 2', price: 49.99, images: ['/uploads/sample2.jpg'], category: 'Clothes', description: 'Nice shirt', countInStock: 25 },
      { name: 'Sample Product 3', price: 19.99, images: ['/uploads/sample3.jpg'], category: 'Accessories', description: 'Nice accessory', countInStock: 100 }
    ];
    await Product.insertMany(products);

    console.log('Data Imported!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

importData();
