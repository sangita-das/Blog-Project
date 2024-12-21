
import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import AdminService from './admin.service';

const getAdminById = catchAsync(async (req: Request, res: Response) => {
  const admin = await AdminService.getAdminById(req.params.id);
  res.status(200).json({
    success: true,
    message: 'Admin fetched successfully',
    data: admin,
  });
});

const createAdmin = catchAsync(async (req: Request, res: Response) => {
  const admin = await AdminService.createAdmin(req.body);
  res.status(201).json({
    success: true,
    message: 'Admin created successfully',
    data: admin,
  });
});

export default { getAdminById, createAdmin };
