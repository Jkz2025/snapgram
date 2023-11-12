import * as z from "zod";

export const SignupValidation = z.object({
    name: z.string().min(2, {message: "muy corto"}),
    username: z.string().min(2, {message: "muy corto"}),
    email: z.string().email(),
    password: z.string().min(8, {message: 'Debe contener min. 8 caracteres'})
  });
  
  export const SigninValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8, {message: 'Debe contener min. 8 caracteres'})
  });
  