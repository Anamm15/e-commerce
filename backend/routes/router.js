import express from 'express';
import { registerUser } from '../controllers/userController.js';
import { login } from '../controllers/authController.js';
import { authenticateJWT } from '../middlewares/authMiddleware.js';
import { getCategories } from '../controllers/categoryController.js';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.post('/register', registerUser);
router.post('/auth/login', login);
router.get('/test', authenticateJWT, (req, res) => {
    res.json({ message: "Selamat berhasil menerapkan" });
});


router.get('/category/get', getCategories);

export default router;