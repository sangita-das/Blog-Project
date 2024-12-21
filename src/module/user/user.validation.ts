import { z } from 'zod';

const updateUser = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().email('Invalid email format').optional(),
  }),
});

export default { updateUser };
