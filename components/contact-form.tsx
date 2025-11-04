"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { AlertCircle, CheckCircle } from "lucide-react"
import { getEnvVar } from "@/lib/env"

interface FormData {
  firstName: string
  lastName: string
  email: string
  company: string
  message: string
}

interface FormState {
  isSubmitting: boolean
  isSuccess: boolean
  isError: boolean
  errorMessage: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  })

  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setFormState({
      isSubmitting: true,
      isSuccess: false,
      isError: false,
      errorMessage: "",
    })

    try {
      const apiUrl = getEnvVar("NEXT_PUBLIC_LEADCMS_URL")

      if (!apiUrl) {
        throw new Error("API URL not configured. Please check environment variables.")
      }

      const formDataToSubmit = new FormData()
      formDataToSubmit.append("file", "")
      formDataToSubmit.append("firstName", formData.firstName)
      formDataToSubmit.append("lastName", formData.lastName)
      formDataToSubmit.append("company", formData.company)
      formDataToSubmit.append("subject", "Contact Form Submission")
      formDataToSubmit.append("message", formData.message)
      formDataToSubmit.append("email", formData.email)
      formDataToSubmit.append("language", navigator.language || "en")

      const response = await fetch(`${apiUrl}/api/contact-us`, {
        method: "POST",
        body: formDataToSubmit,
      })

      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`)
      }

      setFormState({
        isSubmitting: false,
        isSuccess: true,
        isError: false,
        errorMessage: "",
      })

      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        message: "",
      })
    } catch (error) {
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        errorMessage: error instanceof Error ? error.message : "An unknown error occurred",
      })
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [id === "first-name" ? "firstName" : id === "last-name" ? "lastName" : id]: value,
    }))
  }

  if (formState.isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center space-y-3 text-center p-6 border border-primary/50 rounded-lg bg-primary/5">
        <CheckCircle className="h-12 w-12 text-green-500" />
        <h3 className="text-xl font-semibold">Message sent successfully!</h3>
        <p className="text-muted-foreground">Thank you for contacting me. I'll get back to you soon.</p>
        <Button
          onClick={() => setFormState((prev) => ({ ...prev, isSuccess: false }))}
          className="mt-4"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {formState.isError && (
        <div className="bg-destructive/10 p-3 rounded-md flex items-start gap-2 text-destructive">
          <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
          <div>
            <p className="font-medium">Error sending message</p>
            <p className="text-sm">{formState.errorMessage}</p>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="first-name">First Name</Label>
          <Input 
            id="first-name" 
            placeholder="John" 
            value={formData.firstName} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="last-name">Last Name</Label>
          <Input
            id="last-name"
            placeholder="Doe"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company (Optional)</Label>
        <Input
          id="company"
          placeholder="Your company name"
          value={formData.company}
          onChange={handleChange}
        />
      </div>



      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Tell me about your project or inquiry..."
          rows={6}
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <Button 
        type="submit" 
        size="lg" 
        disabled={formState.isSubmitting} 
        className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
      >
        {formState.isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
