"use server"

import { sendContactEmail } from "@/lib/email/contact";
import { supabaseAdmin } from "@/lib/supabase/admin";

import { contactSchema, ContactValues } from "@/schema/contact";

type SubmitResult =
  | { success: true; message: string }
  | { success: false; error: string }

export async function submitContactForm(
  data: ContactValues
): Promise<SubmitResult> {
  const parsed = contactSchema.safeParse(data)

  if (!parsed.success) {
    return { success: false, error: "Invalid form data. Please check your inputs." }
  }

  const supabase = supabaseAdmin()

  const { error } = await supabase.from("contact_messages").insert({
    name: parsed.data.name,
    email: parsed.data.email,
    subject: parsed.data.subject,
    message: parsed.data.message,
  })

  if (error) {
    console.error("Contact DB insert error:", error)
  }

  try {
    await sendContactEmail(parsed.data)
  } catch (emailError) {
    console.error("Contact email error:", emailError)
    return { success: false, error: "Failed to send message. Please try again or email us directly." }
  }

  return {
    success: true,
    message: "Message received! We'll get back to you soon.",
  }
}
