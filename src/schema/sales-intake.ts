import { z } from "zod"

export const salesIntakeSchema = z.object({
  full_name: z.string().min(2, "Full name is required"),
  work_email: z.string().email("Enter a valid work email"),
  company: z.string().optional(),
  website: z.string().url("Enter a valid URL").optional().or(z.literal("")),
  project_type: z.string().min(1, "Select a project type"),
  engagement_model: z.string().min(1, "Select an engagement model"),
  tech_stack: z.array(z.string()).optional(),
  services: z.array(z.string()).optional(),
  goals: z.string().optional(),
  start_date: z.string().optional(),
  budget_range: z.string().optional(),
})

export type SalesIntakeValues = z.infer<typeof salesIntakeSchema>