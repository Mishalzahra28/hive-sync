"use server"

import { sendSalesInquiryEmail } from "@/lib/email/sales-inquiry";
import { supabaseAdmin } from "@/lib/supabase/admin";

import { salesIntakeSchema, SalesIntakeValues } from "@/schema/sales-intake";

type SubmitResult =
  | { success: true; message: string }
  | { success: false; error: string }

export async function submitSalesInquiry(
  data: SalesIntakeValues
): Promise<SubmitResult> {
  const parsed = salesIntakeSchema.safeParse(data)
  if (!parsed.success) {
    return { success: false, error: "Invalid form data. Please check your inputs." }
  }

    const supabase = supabaseAdmin()
  
  const { error } = await supabase.from("sales_intake").insert({
    full_name: parsed.data.full_name,
    work_email: parsed.data.work_email,
    company_brand: parsed.data.company ?? null,
    website: parsed.data.website ?? null,
    project_type: parsed.data.project_type,
    engagement_model: parsed.data.engagement_model,
    tech_stack: parsed.data.tech_stack ?? [],
    services_needed: parsed.data.services ?? [],
    goals_requirements: parsed.data.goals ?? null,
    target_start_date: parsed.data.start_date ?? null,
    budget_range: parsed.data.budget_range ?? null,
  })

  if (error) {
    console.error("DB insert error:", error)
    return { success: false, error: "Failed to submit inquiry. Please try again." }
  }

  try {
    await sendSalesInquiryEmail(parsed.data)
  } catch (emailError) {
    console.error("Sales inquiry email error:", emailError)
  }

  return {
    success: true,
    message: "Inquiry received! We'll be in touch soon.",
  }
}