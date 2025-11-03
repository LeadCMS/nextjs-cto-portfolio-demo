import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { MDXRemote } from "next-mdx-remote-client/rsc"
import { useMDXComponents } from "@/components/mdx-components"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CMSContent } from "@leadcms/sdk"

export interface ProjectTemplateProps {
  content: CMSContent
}

/**
 * Template for project detail pages
 * Includes back navigation, badge, and external links
 */
export default function ProjectTemplate({ content }: ProjectTemplateProps) {
  const components = useMDXComponents({})

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-8">
          {content.badge && (
            <Badge 
              className={`mb-4 ${
                content.badgeVariant === "primary" ? "bg-primary text-primary-foreground" :
                content.badgeVariant === "accent" ? "bg-accent text-accent-foreground" :
                content.badgeVariant === "chart-3" ? "bg-chart-3 text-foreground" :
                ""
              }`}
            >
              {content.badge}
            </Badge>
          )}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{content.title}</h1>
          {content.category && (
            <p className="text-xl text-muted-foreground">{content.category}</p>
          )}
        </div>

        <div className="prose prose-invert max-w-none">
          <MDXRemote source={content.body} components={components} />

          {content.technologies && content.technologies.length > 0 && (
            <>
              <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {content.technologies.map((tech: string) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </>
          )}

          <div className="flex gap-4">
            {content.externalLink && (
              <a href={content.externalLink} target="_blank" rel="noopener noreferrer">
                <Button 
                  className={`group ${
                    content.badgeVariant === "primary" ? "bg-primary hover:bg-primary/90 text-primary-foreground" :
                    content.badgeVariant === "accent" ? "bg-accent hover:bg-accent/90 text-accent-foreground" :
                    content.badgeVariant === "chart-3" ? "bg-chart-3 hover:bg-chart-3/90 text-foreground" :
                    ""
                  }`}
                >
                  Visit Website
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Button>
              </a>
            )}
            {content.githubLink && (
              <a href={content.githubLink} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="group bg-transparent">
                  Explore on GitHub
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Button>
              </a>
            )}
          </div>
        </div>
      </article>
    </div>
  )
}
