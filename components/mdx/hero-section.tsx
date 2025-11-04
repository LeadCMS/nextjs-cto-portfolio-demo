import React from "react"
import Image from "next/image"
import { getTextContent } from "@/lib/mdx-utils"

interface HeroSectionProps {
  name: string
  headline: string
  subheadline: string
  imageUrl: string
  imageAlt: string
  quote: string
  quoteAuthor: string
  children: React.ReactNode
}

export function HeroSection({
  name,
  headline,
  subheadline,
  imageUrl,
  imageAlt,
  quote,
  quoteAuthor,
  children,
}: HeroSectionProps) {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6 text-balance">
            {headline}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-3 md:mb-4 leading-relaxed">
            {subheadline}
          </p>
          <div className="prose prose-invert max-w-none">
            <div className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {children}
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 w-full md:w-auto flex flex-col items-center md:items-start">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-border/40">
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={256}
              height={256}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <p className="text-xl md:text-2xl font-semibold mt-4 text-center md:text-left">{name}</p>
          <div className="mt-4 max-w-xs text-center md:text-left">
            <p className="text-sm md:text-base text-muted-foreground italic leading-relaxed">
              "{quote}"
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              - {quoteAuthor}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
