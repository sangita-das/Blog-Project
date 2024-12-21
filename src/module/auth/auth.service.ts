import bcrypt from 'bcryptjs';
import ApiError from '../../utils/ApiError';
import { StatusCodes } from 'http-status-codes';
import User from '../user/user.model';

export default class AuthService {
  static async register(userData: { email: string; password: string; name: string }) {
    const { email, password, name } = userData;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new ApiError(StatusCodes.CONFLICT, 'Email is already in use');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword, name });
    await user.save();

    return user;
  }

  static async login(email: string, password: string) {
    const user = await User.findOne({ email });
    if (!user) {
      throw new ApiError(StatusCodes.UNAUTHORIZED, 'Invalid credentials');
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      throw new ApiError(StatusCodes.UNAUTHORIZED, 'Invalid credentials');
    }

    // Add JWT token generation logic here if needed
    return { token: 'dummy-token' }; // Replace with actual token logic
  }
}
