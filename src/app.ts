import express, { Request, Response } from 'express'
import dotenv from 'dotenv';
import adminRoutes from './module/admin/admin.route';
import authRoutes from './module/auth/auth.router';
import blogRoutes from './module/blog/blog.router';
import userRoutes from './module/user/user.router';
import { globalErrorHandler } from './middlewares/globalErrorHandler';

dotenv.config();

const app = express();

// middleware
app.use(express.json())


app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/admin', adminRoutes);


// POST: /api/user/create-user
//  http://localhost:5000/api/users
//  http://localhost:5000/api/blogs




app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server Live ..⚡',
  })
})


// Global Error Handler
app.use(globalErrorHandler)


app.use("*", (req: Request, res: Response) => {
  res.status(404).json({
    status: false,
    message: 'Route not found'
  })
})


export default app


// apidogendpoint
// http://localhost:5000/api/users/create-admin
// POST http://localhost:5000/api/auth/register
// POST http://localhost:5000/api/auth/login
