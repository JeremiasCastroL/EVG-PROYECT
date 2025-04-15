import {z} from 'zod'

export const registerSchema = z.object({
   name: z.string({
     required_error: 'Username is required'
   }),
   user: z.string({
    required_error: 'Email is required'
   }).email({
     required_error: 'Invalid email'
   }),
   rol: z.string({
    required_error: 'Username is required'
   }),
   pass: z.string({
    required_error: "Password is required"
   }).min(6, {message: "Password must be at least 6 characters"})
})

export const loginSchema = z.object({
    user: z.string({
       required_error: "Email is required"
    }).email({
        message: "Invalid email"
    }),
    pass: z.string({
        required_error: "Password is required"
    }).min(6, {
        message: "Password must be at least 6 characters"
    })
})