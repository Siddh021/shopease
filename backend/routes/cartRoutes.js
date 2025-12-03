import express from 'express';
import { getCart, upsertCart, clearCart } from '../controllers/cartController.js';
import { protect } from '../middleware/auth.js';
const router = express.Router();

router.get('/', protect, getCart);
router.post('/', protect, upsertCart);
router.delete('/', protect, clearCart);

export default router;
