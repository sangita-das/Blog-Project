import { Router } from 'express'
import {blogController} from './blog.controller';

const blogRouter = Router()

/* blogRouter.post('/', verifyToken, authMiddleware('user'), blogController.createBlog);
blogRouter.patch('/:id', verifyToken, authMiddleware('user'), BlogController.updateBlog);
blogRouter.delete('/:id', verifyToken, authMiddleware('user'), BlogController.deleteBlog);
blogRouter.get('/', BlogController.getAllBlogs); */


blogRouter.get('/:id', blogController.getSingleBlog)
blogRouter.get('/', blogController.getBlogs)
blogRouter.post('/', blogController.createBlog)
blogRouter.put('/:id', blogController.updateBlog)
blogRouter.delete('/:id', blogController.deleteBlog)

export default blogRouter;