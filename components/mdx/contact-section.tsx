import React from "react"
import { ContactForm } from "@/components/contact-form"

interface ContactSectionProps {
  title: string
  description: string
}

export function ContactSection({ title, description }: ContactSectionProps) {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-16 mb-8 md:mb-16">
      <div className="max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 md:mb-4">{title}</h2>
        <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8 leading-relaxed">
          {description}
        </p>
        <ContactForm />
      </div>
    </section>
  )
}
