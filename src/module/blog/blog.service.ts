import Blog from './blog.model';
import ApiError from '../../utils/ApiError';
import { StatusCodes } from 'http-status-codes';

const createBlog = async (data: any, userId: string) => {
  return await Blog.create({ ...data, author: userId });
};

const updateBlog = async (id: string, data: any, userId: string) => {
  const blog = await Blog.findOne({ _id: id, author: userId });
  if (!blog) {
    throw new ApiError(StatusCodes.NOT_FOUND, 'Blog not found or unauthorized');
  }
  Object.assign(blog, data);
  return await blog.save();
};

const deleteBlog = async (id: string, userId: string) => {
  const blog = await Blog.findOne({ _id: id, author: userId });
  if (!blog) {
    throw new ApiError(StatusCodes.NOT_FOUND, 'Blog not found or unauthorized');
  }
  await blog.deleteOne();
};

const getAllBlogs = async (query: any) => {
  const { search, sortBy = 'createdAt', sortOrder = 'desc', filter } = query;
  const match: any = search ? { title: { $regex: search, $options: 'i' } } : {};
  if (filter) match.author = filter;
  return await Blog.find(match).sort({ [sortBy]: sortOrder === 'desc' ? -1 : 1 });
};

export default { createBlog, updateBlog, deleteBlog, getAllBlogs };
