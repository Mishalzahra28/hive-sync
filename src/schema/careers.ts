import { z } from "zod"

export const careerFormSchema = z.object({
  first_name: z.string().min(2, "First name must be at least 2 characters"),
  last_name: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone_number: z
    .string()
    .min(7, "Phone number must be at least 7 digits")
    .regex(/^[+\d\s\-()]+$/, "Invalid phone number format"),
  message: z.string().max(1000, "Message must be under 1000 characters").optional(),
})

export type CareerFormValues = z.infer<typeof careerFormSchema>
