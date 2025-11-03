import React from "react"

interface ProjectGridProps {
  title?: string
  children: React.ReactNode
}

export function ProjectGrid({ title, children }: ProjectGridProps) {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-16">
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 md:mb-8">{title}</h2>
      )}
      <div className="grid md:grid-cols-3 gap-4 md:gap-6">
        {children}
      </div>
    </section>
  )
}
