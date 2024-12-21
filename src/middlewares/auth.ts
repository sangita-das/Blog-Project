import { Request, Response, NextFunction } from 'express';
import ApiError from '../utils/ApiError';
import { StatusCodes } from 'http-status-codes';

const authMiddleware = (requiredRole: 'user' | 'admin') => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.user?.role !== requiredRole) {
    return next(new ApiError(StatusCodes.FORBIDDEN, 'Access denied'));
  }
  next();
};

export default authMiddleware;