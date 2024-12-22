/* import { ObjectId } from 'mongoose';
// import { IUser } from '../user/user.interface';
// import { IBlog } from '../blog/blog.interface';

// Admin Actions - Block User Request
export interface IBlockUserRequest {
  isBlocked: boolean;
}

// Admin - Delete Blog Request
export interface IDeleteBlogRequest {
  blogId: ObjectId;
}

// Admin Response Template Interface
export interface IAdminApiResponse<T = any> {
  success: boolean;
  message: string;
  statusCode: number;
  data?: T;
  error?: any;
}
 */

// import mongoose from "mongoose";



export interface IAdmin {
  // user : mongoose.Schema.Types.ObjectId
  // blog : mongoose.Schema.Types.ObjectId
  id: string;
  role: string;
}