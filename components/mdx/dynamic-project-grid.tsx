import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Database, Code2, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getAllContentSlugsForLocale, getCMSContentBySlugForLocaleWithDraftSupport, getConfig, type CMSContent } from "@leadcms/sdk"

interface ProjectMetadata extends CMSContent {
  badge?: string
  badgeVariant?: "primary" | "accent" | "chart-3" | "default" | "secondary" | "destructive" | "outline"
  externalLink?: string
  githubLink?: string
  category?: string
  tags?: string[]
}

interface DynamicProjectGridProps {
  title?: string
  maxProjects?: number
  userUid?: string | null
}

const iconMap = {
  Database,
  Code2,
  Wrench,
} as const

// Map project categories/types to icons
const getProjectIcon = (project: ProjectMetadata) => {
  const category = project.category?.toLowerCase() || ""
  const title = project.title?.toLowerCase() || ""
  
  if (category.includes("excel") || title.includes("excel")) return "Wrench"
  if (category.includes("cms") || category.includes("platform") || title.includes("cms")) return "Code2"
  if (category.includes("cmms") || title.includes("tagpoint")) return "Database"
  
  // Default based on tags or fallback
  return "Code2"
}

const variantClasses = {
  primary: {
    card: "group hover:border-primary/50 transition-all duration-300",
    iconBg: "bg-primary/10 group-hover:bg-primary/20",
    iconColor: "text-primary",
    button: "text-primary hover:bg-primary/10 hover:text-primary",
  },
  "chart-2": {
    card: "group hover:border-chart-2/50 transition-all duration-300",
    iconBg: "bg-chart-2/10 group-hover:bg-chart-2/20",
    iconColor: "text-chart-2",
    button: "text-chart-2 hover:bg-chart-2/10 hover:text-chart-2",
  },
  "chart-3": {
    card: "group hover:border-chart-3/50 transition-all duration-300",
    iconBg: "bg-chart-3/10 group-hover:bg-chart-3/20",
    iconColor: "text-chart-3",
    button: "text-chart-3 hover:bg-chart-3/10 hover:text-chart-3",
  },
}

export function DynamicProjectGrid({ title = "Featured Projects", maxProjects = 3, userUid }: DynamicProjectGridProps) {
  const sdkConfig = getConfig()
  const locale = sdkConfig.defaultLanguage
  
  // Get all content slugs filtered by project type, including drafts if userUid is provided
  const includeDrafts = !!userUid
  const allSlugs = getAllContentSlugsForLocale(locale, ["project"], includeDrafts, userUid)
  
  // Get content for each project slug
  const allProjects: ProjectMetadata[] = allSlugs
    .map(slug => {
      const content = getCMSContentBySlugForLocaleWithDraftSupport(slug, locale, userUid, includeDrafts)
      if (userUid && content) {
        console.log(`Loaded project: ${slug} - ${content.title}`)
      }
      return content
    })
    .filter((content): content is CMSContent => content !== null)
    .filter(content => content.type === "project") as ProjectMetadata[]
  
  // Sort projects by publishedAt (newest first) and then take the limit
  const projects = allProjects
    .sort((a, b) => {
      const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0
      const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0
      return dateB - dateA // Newest first
    })
    .slice(0, maxProjects)
  
  // Prepare projects for display
  const displayProjects = projects.map((project: ProjectMetadata) => ({
    ...project,
    icon: getProjectIcon(project),
    variant: (project.badgeVariant as "primary" | "chart-2" | "chart-3") || "primary"
  }))

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-16">
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 md:mb-8">{title}</h2>
      )}
      <div className="grid md:grid-cols-3 gap-4 md:gap-6">
        {displayProjects.map((project: ProjectMetadata & { icon: string; variant: "primary" | "chart-2" | "chart-3" }) => {
          const IconComponent = iconMap[project.icon as keyof typeof iconMap]
          const classes = variantClasses[project.variant]
          
          return (
            <Card key={project.slug} className={`${classes.card} flex flex-col h-full`}>
              <CardHeader className="pb-2 md:pb-3">
                {IconComponent && (
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-3 md:mb-4 transition-colors ${classes.iconBg}`}>
                    <IconComponent className={`w-5 h-5 md:w-6 md:h-6 ${classes.iconColor}`} />
                  </div>
                )}
                <CardTitle className="text-lg md:text-xl">
                  {project.title?.replace(/\s*-.*$/, '') || project.title}
                </CardTitle>
                <CardDescription className="text-sm md:text-base mt-1">
                  {project.badge || project.category || 'Project'}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 flex flex-col flex-1">
                <div className="text-sm text-muted-foreground mb-4 leading-relaxed prose prose-sm max-w-none flex-1">
                  {project.description}
                </div>
                <div className="mt-auto space-y-3">
                  {/* External links */}
                  {(project.externalLink || project.githubLink) && (
                    <div className="flex gap-2 flex-wrap">
                      {project.externalLink && (
                        <Link href={project.externalLink} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" className="cursor-pointer">
                            Visit Site
                          </Button>
                        </Link>
                      )}
                      {project.githubLink && (
                        <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" className="cursor-pointer">
                            GitHub
                          </Button>
                        </Link>
                      )}
                    </div>
                  )}
                  
                  {/* Learn more link */}
                  <Link href={`/${project.slug}`}>
                    <Button
                      variant="ghost"
                      className={`group/btn py-3 px-2 min-h-[44px] font-normal text-sm cursor-pointer ${classes.button}`}
                    >
                      Learn about {project.title?.replace(/\s*-.*$/, '') || project.title}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}