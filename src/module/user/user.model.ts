import mongoose, { Schema } from 'mongoose';
import { IUser } from './user.interface';
import config from '../../config';
import bcrypt from 'bcrypt';

const userSchema = new Schema<IUser>({
  name: {
     type: String, 
     required: [true, 'Please provide your name'],
    },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  password: {
     type: String, 
     required: true 
    },
  role: { 
    type: String,
    enum: ['user', 'admin'], 
    default: 'user' 
  },
  isBlocked: { 
    type: Boolean,
     default: false 
    },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});



userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this; // doc
  // hashing password and save into DB

  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );

  next();
});

// set '' after saving password
userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});


const User = mongoose.model<IUser>('User', userSchema);
export default User;
