import User from './user.model';
import ApiError from '../../utils/ApiError';
import { StatusCodes } from 'http-status-codes';
import { IUser } from './user.interface';

const getUserById = async (id: string) => {
  const user = await User.findById(id);
  if (!user) {
    throw new ApiError(StatusCodes.NOT_FOUND, 'User not found');
  }
  return user;
};

const updateUser = async (id: string, updateData: Partial<IUser>) => {
  const user = await User.findByIdAndUpdate(id, updateData, { new: true });
  if (!user) {
    throw new ApiError(StatusCodes.NOT_FOUND, 'User not found');
  }
  return user;
};

export default { getUserById, updateUser };