import express from 'express';
import { registerUser, authUser, getProfile } from '../controllers/userController.js';
import { protect } from '../middleware/auth.js';
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', authUser);
router.get('/profile', protect, getProfile);

export default router;
