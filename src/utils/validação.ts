import z  from 'zod';

export const validUser = z.object({
    nome: z.string().min(4, 'O nome deve conter no minímo 4 caracteres'),
    email: z.string().email('Email inválido.'),
    senha: z.string()
        .min(8, 'a senha deve conter no minímo 8 caracteres')
        .regex(/[!@#$%^&*(),.?":{}|<>]/, 'A senha deve conter pelo menos um caractere especial')
        .regex(/\d/, 'A senha deve conter pelo menos um número')
})