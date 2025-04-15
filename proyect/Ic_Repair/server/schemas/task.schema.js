import {z} from 'zod'

export const createTaskSchema = z.object({
    title: z.string({
        required_error: "title required"
    }),
    description: z.string({
        required_error: "The description must be a string"
    }),
    date: z.string().datetime().optional()
})