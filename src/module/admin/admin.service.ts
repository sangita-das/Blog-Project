import Admin from './admin.model';
import ApiError from '../../utils/ApiError';
import { StatusCodes } from 'http-status-codes';
import Blog from '../blog/blog.model';
import User from '../user/user.model';

// Function to fetch admin by ID
const getAdminById = async (id: string) => {
  const admin = await Admin.findById(id);
  if (!admin) {
    throw new ApiError(StatusCodes.NOT_FOUND, 'Admin not found');
  }
  return admin;
};

// Function to create a new admin
const createAdmin = async (adminData: any) => {
  const admin = await Admin.create(adminData);
  return admin;
};

// Function to block a user (ensure userId is of the correct type, usually a string)
const blockUser = async (userId: string): Promise<void> => {
  // Example: This function could be used to block a user in your database
  const user = await User.findById(userId);  // Assuming you have a User model
  if (!user) {
    throw new ApiError(StatusCodes.NOT_FOUND, 'User not found');
  }
  user.isBlocked = true;  // Assuming you have a `isBlocked` property on the User model
  await user.save();
};

const deleteBlog = async (blogId: string): Promise<void> => {
  // Find the blog by ID
  const blog = await Blog.findById(blogId);  // Assuming you have a Blog model
  if (!blog) {
    throw new ApiError(StatusCodes.NOT_FOUND, 'Blog not found');
  }

  // Use deleteOne() to delete the blog
  await Blog.deleteOne({ _id: blogId });
};

export default {
  getAdminById,
  createAdmin,
  blockUser,
  deleteBlog,
};
