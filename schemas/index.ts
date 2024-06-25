
import * as z from "zod";


export const LoginSchema = z.object({
    email: z.string().email({
    message: "Please enter a valid email",
    }),
    password: z.string().min(6, {
    message: "Password must be at least 6 characters",
    }),
});
    

export const RegisterSchema = z.object({
    email: z.string().email({
    message: "Please enter a valid email",
    }),
    password: z.string().min(6, {
    message: "Password must be at least 6 characters",
    }),
    name: z.string().min(1, {
        message: "Name is required"
    })
});

export const ResetPasswordSchema = z.object({
    email: z.string().email({
    message: "Please enter a valid email",
    }),
});

export const NewPasswordSchema = z.object({
    password: z.string().min(6, {
    message: "Password must be at least 6 characters",
    }),
});

export const CreateVideoSchema  = z.object({
  name: z.string().min(1, {
    message: "Title is required",
  }),
    description: z.string().min(3, {
      message: "Description must be  at least 6 characters"
  })
});


export const VideoSchema  = z.object({
  title: z.string().min(1, {
    message: "Title is required",
  }),
    description: z.string().min(3, {
      message: "Description must be  at least 6 characters"
    })
});