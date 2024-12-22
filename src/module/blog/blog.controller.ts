import { Request, Response } from 'express'
import {blogService} from './blog.service';

const createBlog = async (req: Request, res: Response) => {
  
  try {
    const result = await blogService.createBlog(req.body, req.user?.id)

    res.send({
      success: true,
      message: 'Blog created successfully',
      result,
    })
  } catch (error) {
    res.send({
      success: false,
      message: 'Something went wrong',
      error,
    })
  }
}

const getBlogs = async (req: Request, res: Response) => {
  try {
    const result = await blogService.getBlogs(req.query)

    res.send({
      success: true,
      message: 'Blogs fetched successfully',
      result,
    })
  } catch (error) {
    res.send({
      success: false,
      message: 'Something went wrong',
      error,
    })
  }
}

const getSingleBlog = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const result = await blogService.getSingleBlog(id)

    res.send({
      success: true,
      message: 'Blog get successfully',
      result,
    })
  } catch (error) {
    res.send({
      success: false,
      message: 'Something went wrong',
      error,
    })
  }
}

const updateBlog = async (req: Request, res: Response) => {
  try {
    const result = await blogService.updateBlog(req.params.id, req.body, req.user?.id)

    res.send({
      success: true,
      message: 'Blog updated successfully',
      result,
    })
  } catch (error) {
    res.send({
      success: false,
      message: 'Something went wrong',
      error,
    })
  }
}
const deleteBlog = async (req: Request, res: Response) => {
  try {
    const result = await blogService.deleteBlog(req.params.id, req.user?.id)

    res.send({
      success: true,
      message: 'Blog deleted successfully',
      result,
    })
  } catch (error) {
    res.send({
      success: false,
      message: 'Something went wrong',
      error,
    })
  }
}


export const blogController = {
  createBlog,
  getBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
  
}