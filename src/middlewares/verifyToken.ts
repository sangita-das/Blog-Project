import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import ApiError from '../utils/ApiError';
import { StatusCodes } from 'http-status-codes';

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return next(new ApiError(StatusCodes.UNAUTHORIZED, 'No token provided'));
  }
  const token = authHeader.split(' ')[1];
  jwt.verify(token, process.env.JWT_SECRET!, (err, decoded) => {
    if (err) {
      return next(new ApiError(StatusCodes.UNAUTHORIZED, 'Invalid token'));
    }
    req.user = {decoded,  id: 'user-id'};
    next();
  });
};

export default verifyToken;
