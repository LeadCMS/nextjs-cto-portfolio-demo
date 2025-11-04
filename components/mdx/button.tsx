import Link from "next/link"
import { Button as UIButton } from "@/components/ui/button"
import { getTextContent } from "@/lib/mdx-utils"

interface ButtonProps {
  href?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  children: React.ReactNode
  className?: string
}

/**
 * Button component for MDX content
 * Supports both internal and external links
 */
export function Button({ 
  href, 
  variant = "default", 
  size = "default", 
  children, 
  className 
}: ButtonProps) {
  // Extract plain text to avoid MDX <p> wrapper
  const textContent = getTextContent(children)

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:")
    
    if (isExternal) {
      return (
        <UIButton
          variant={variant}
          size={size}
          className={className}
          asChild
        >
          <a href={href} target="_blank" rel="noopener noreferrer">
            {textContent}
          </a>
        </UIButton>
      )
    }
    
    return (
      <UIButton
        variant={variant}
        size={size}
        className={className}
        asChild
      >
        <Link href={href}>
          {textContent}
        </Link>
      </UIButton>
    )
  }

  return (
    <UIButton
      variant={variant}
      size={size}
      className={className}
      type="button"
    >
      {textContent}
    </UIButton>
  )
}