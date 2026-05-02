"use server"

import { supabaseAdmin } from "@/lib/supabase/admin"

import { careerFormSchema, CareerFormValues } from "@/schema/careers";


type SubmitResult =
  | { success: true; message: string }
  | { success: false; error: string }

export async function submitCareerApplication(
  data: CareerFormValues,
  formData: FormData
): Promise<SubmitResult> {
  // Validate schema
  const parsed = careerFormSchema.safeParse(data)
  if (!parsed.success) {
    return { success: false, error: "Invalid form data. Please check your inputs." }
  }

  const supabase = supabaseAdmin()

  let cv_url: string | null = null

  // Handle optional CV upload
  const cvFile = formData.get("cv") as File | null
  if (cvFile && cvFile.size > 0) {
    if (cvFile.type !== "application/pdf") {
      return { success: false, error: "CV must be a PDF file." }
    }
    if (cvFile.size > 5 * 1024 * 1024) {
      return { success: false, error: "CV file size must be under 5MB." }
    }

    const fileName = `${Date.now()}-${parsed.data.email.replace(/[^a-z0-9]/gi, "_")}.pdf`
    const arrayBuffer = await cvFile.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("cv-uploads")
      .upload(fileName, buffer, {
        contentType: "application/pdf",
        upsert: false,
      })

    if (uploadError) {
      console.error("CV upload error:", uploadError)
      return { success: false, error: "Failed to upload CV. Please try again." }
    }

    const { data: urlData } = supabase.storage
      .from("career-cvs")
      .getPublicUrl(uploadData.path)

    cv_url = urlData.publicUrl
  }

  // Insert into career_applications table
  const { error: insertError } = await supabase.from("career_applications").insert({
    first_name: parsed.data.first_name,
    last_name: parsed.data.last_name,
    email: parsed.data.email,
    phone_number: parsed.data.phone_number,
    message: parsed.data.message ?? null,
    cv_url,
  })

  if (insertError) {
    console.error("DB insert error:", insertError)
    return { success: false, error: "Failed to submit application. Please try again." }
  }

  return {
    success: true,
    message: "Application submitted! We'll be in touch soon.",
  }
}