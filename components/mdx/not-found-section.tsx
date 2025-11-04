import { getTextContent } from "@/lib/mdx-utils"

interface NotFoundSectionProps {
  badge?: string
  title: string
  description?: string
  children?: React.ReactNode
}

/**
 * NotFoundSection component for 404 error pages
 * Displays error information in a centered, user-friendly layout
 */
export function NotFoundSection({ 
  badge = "404", 
  title, 
  description, 
  children 
}: NotFoundSectionProps) {
  const titleText = getTextContent(title)
  const descriptionText = description ? getTextContent(description) : undefined

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Error Badge */}
        <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium bg-muted/50 text-muted-foreground border-border">
          {badge}
        </div>
        
        {/* Title */}
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {titleText}
        </h1>
        
        {/* Description */}
        {descriptionText && (
          <p className="text-lg text-muted-foreground max-w-prose">
            {descriptionText}
          </p>
        )}
        
        {/* Action buttons or additional content */}
        {children && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            {children}
          </div>
        )}
      </div>
    </div>
  )
}