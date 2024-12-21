import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import BlogService from './blog.service';

const createBlog = catchAsync(async (req: Request, res: Response) => {
  const blog = await BlogService.createBlog(req.body, req.user?.id);
  res.status(201).json({
    success: true,
    message: 'Blog created successfully',
    data: blog,
  });
});

const updateBlog = catchAsync(async (req: Request, res: Response) => {
  const blog = await BlogService.updateBlog(req.params.id, req.body, req.user?.id);
  res.status(200).json({
    success: true,
    message: 'Blog updated successfully',
    data: blog,
  });
});

const deleteBlog = catchAsync(async (req: Request, res: Response) => {
  await BlogService.deleteBlog(req.params.id, req.user?.id);
  res.status(200).json({
    success: true,
    message: 'Blog deleted successfully',
  });
});

const getAllBlogs = catchAsync(async (req: Request, res: Response) => {
  const blogs = await BlogService.getAllBlogs(req.query);
  res.status(200).json({
    success: true,
    message: 'Blogs fetched successfully',
    data: blogs,
  });
});

export default { createBlog, updateBlog, deleteBlog, getAllBlogs };