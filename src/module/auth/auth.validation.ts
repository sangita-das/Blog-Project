import { z } from 'zod';

const register = z.object({
  body: z.object({
    name: z.string().nonempty('Name is required'),
    email: z.string().email('Invalid email format'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
  }),
});

const login = z.object({
  body: z.object({
    email: z.string().email('Invalid email format'),
    password: z.string().nonempty('Password is required'),
  }),
});

export default { register, login };
