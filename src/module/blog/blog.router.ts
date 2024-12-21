import express from 'express';
import BlogController from './blog.controller';
import verifyToken from '../../middlewares/verifyToken';
import authMiddleware from '../../middlewares/auth';

const router = express.Router();

router.post('/', verifyToken, authMiddleware('user'), BlogController.createBlog);
router.patch('/:id', verifyToken, authMiddleware('user'), BlogController.updateBlog);
router.delete('/:id', verifyToken, authMiddleware('user'), BlogController.deleteBlog);
router.get('/', BlogController.getAllBlogs);

export default router;