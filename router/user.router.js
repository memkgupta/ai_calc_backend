import express from 'express';
import authenticateToken from '../middleware/auth.middleware.js';
import { signup, login, getMe, updateUser } from '../controllers/user.controller.js';

const router = express.Router();

// Routes
router.post('/signup', signup);        // User Signup
router.post('/login', login);          // User Login
router.get('/me', authenticateToken, getMe); // Get current user
router.put('/update', authenticateToken, updateUser); // Update user details

export default router;
