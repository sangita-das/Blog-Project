import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import UserService from './user.service';

const getUserById = catchAsync(async (req: Request, res: Response) => {
  const user = await UserService.getUserById(req.params.id);
  res.status(200).json({
    success: true,
    message: 'User fetched successfully',
    data: user,
  });
});

const updateUser = catchAsync(async (req: Request, res: Response) => {
  const updatedUser = await UserService.updateUser(req.params.id, req.body);
  res.status(200).json({
    success: true,
    message: 'User updated successfully',
    data: updatedUser,
  });
});

export default { getUserById, updateUser };
