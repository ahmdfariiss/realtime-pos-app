import z from 'zod';

export const loginSchemaForm = z.object({
  email: z
    .string()
    .min(1, 'Email harus diisi')
    .email('Masukan email yang benar'),
  password: z.string().min(1, 'Password harus diisi'),
});

export type LoginForm = z.infer<typeof loginSchemaForm>;
