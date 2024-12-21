import express, { Request, Response } from 'express'
import dotenv from 'dotenv';
import globalErrorHandler from './middlewares/globalErrorHandler';
import adminRoutes from './module/admin/admin.route';
import authRoutes from './module/auth/auth.router';
import blogRoutes from './module/blog/blog.router';
import userRoutes from './module/user/user.router';

dotenv.config();

const app = express();

// middleware
app.use(express.json())

app.use('/api/admin', adminRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/users', userRoutes);

// POST: /api/user/create-user
//  http://localhost:5000/api/users
//  http://localhost:5000/api/blogs




app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server Live ⚡',
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