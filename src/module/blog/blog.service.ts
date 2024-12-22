import { StatusCodes } from 'http-status-codes';
// import { IBlog } from './blog.interface'
import Blog from './blog.model'
import QueryBuilder from '../../builder/querybuilder';

/* const createBlog = async (payload: IBlog) => {
  //   const result = await Blog.create(payload)

  const data = new Blog(payload)

  //   data.color = "red"

  const result = await data.save()
  return result
} */

  const createBlog = async (data: any, userId: string) => {
  return await Blog.create({ ...data, author: userId });
};

const getBlogs = async (query: Record<string, unknown> ) => {
  

  const searchableFields = ["title", "createdAt", "isPublished" , "author"];
  const blogs = new QueryBuilder(Blog.find(), query).search(searchableFields).filter().sort().paginate().select();

  const result = await blogs.modelQuery;
  return result;
} 

 /*  const getBlogs = async (query: any) => {
  const { search, sortBy = 'createdAt', sortOrder = 'desc', filter } = query;
  const match: any = search ? { title: { $regex: search, $options: 'i' } } : {};
  if (filter) match.author = filter;
  return await Blog.find(match).sort({ [sortBy]: sortOrder === 'desc' ? -1 : 1 });
}; */

const getSingleBlog = async (id: string) => {
  const result = Blog.findById(id)
  return result
}

/* const updateBlog = async (id: string, payload: Partial<IBlog>) => {
  const result = Blog.findByIdAndUpdate(id, payload)
  return result
} */

  const updateBlog = async (id: string, data: any, userId: string) => {
  const blog = await Blog.findOne({ _id: id, author: userId});
  if (!blog) {
    throw (StatusCodes.NOT_FOUND, 'Blog not found or unauthorized');
  }
  Object.assign(blog, data);
  return await blog.save();
};

/* const deleteBlog = async (id: string) => {
  const result = Blog.findByIdAndDelete(id)
  return result
} */

  const deleteBlog = async (id: string, userId: string) => {
  const blog = await Blog.findOne({ _id: id, author: userId });
  if (!blog) {
    throw (StatusCodes.NOT_FOUND, 'Blog not found or unauthorized');
  }
  await blog.deleteOne();
};


export const blogService = {
  createBlog,
  getBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
}