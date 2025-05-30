import { Router } from 'express';
import { register, login, getProfile, updateProfile } from '../controllers/authenController';
import { authenMiddleware } from '../middleware/authenMiddleware';

const router = Router();

router.post('/register', authenMiddleware, register);
router.post('/login', authenMiddleware, login);

router.get('/profile', authenMiddleware, getProfile);
router.put('/profile', authenMiddleware, updateProfile);

export default router;