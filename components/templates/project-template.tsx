import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { MDXRemote } from "next-mdx-remote-client/rsc"
import { useMDXComponents } from "@/components/mdx-components"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CMSContent } from "@leadcms/sdk"

export interface ProjectTemplateProps {
  content: CMSContent
  userUid?: string | null
}

/**
 * Template for project detail pages
 * Includes back navigation, badge, and external links
 */
export default function ProjectTemplate({ content, userUid }: ProjectTemplateProps) {
  const components = useMDXComponents({ userUid })

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
        </div>
      </nav>

      <article className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="mb-12">
          {content.badge && (
            <Badge 
              className={`mb-4 text-xs sm:text-sm ${
                content.badgeVariant === "primary" ? "bg-primary text-primary-foreground" :
                content.badgeVariant === "chart-2" ? "bg-chart-2 text-chart-2-foreground" :
                content.badgeVariant === "chart-3" ? "bg-chart-3 text-chart-3-foreground" :
                ""
              }`}
            >
              {content.badge}
            </Badge>
          )}
        </div>

        <div className="prose prose-base sm:prose-lg dark:prose-invert max-w-none [&>h1]:text-4xl [&>h1]:sm:text-5xl [&>h1]:font-bold [&>h1]:tracking-tight [&>h1]:mb-3 [&>h1]:mt-0 [&>h2]:text-xl [&>h2]:sm:text-2xl [&>h2]:font-semibold [&>h2]:mt-12 [&>h2]:mb-6 [&>h3]:text-lg [&>h3]:font-medium [&>ul]:space-y-3 [&>ul>li]:text-muted-foreground [&>ul>li>strong]:text-foreground [&>p]:text-muted-foreground [&>p]:leading-relaxed">
          <MDXRemote source={content.body} components={components} />
        </div>

        {content.tags && content.tags.length > 0 && (
          <div className="mt-12 mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Technology Stack</h2>
            <div className="flex flex-wrap gap-2">
              {content.tags.map((tech: string) => (
                <Badge key={tech} variant="secondary">{tech}</Badge>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8">
          {content.externalLink && (
            <a href={content.externalLink} target="_blank" rel="noopener noreferrer">
              <Button 
                className={`w-full sm:w-auto group cursor-pointer ${
                  content.badgeVariant === "primary" ? "bg-primary hover:bg-primary/90 text-primary-foreground" :
                  content.badgeVariant === "chart-2" ? "bg-chart-2 hover:bg-chart-2/90 text-chart-2-foreground" :
                  content.badgeVariant === "chart-3" ? "bg-chart-3 hover:bg-chart-3/90 text-chart-3-foreground" :
                  ""
                }`}
              >
                {content.externalLink.includes('leadcms.ai') ? 'Visit LeadCMS.ai' :
                 content.externalLink.includes('xltools.net') ? 'Visit XLTools.net' :
                 content.externalLink.includes('tagpoint.co.uk') ? 'Visit TagPoint.co.uk' :
                 'Visit Website'}
                <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </a>
          )}
          {content.githubLink && (
            <a href={content.githubLink} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full sm:w-auto group cursor-pointer">
                Explore on GitHub
                <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </a>
          )}
        </div>
      </article>
    </div>
  )
}
