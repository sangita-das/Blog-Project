import { Request, Response } from 'express';

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message,
    error: err.error || null,
  });
};

export default globalErrorHandler;