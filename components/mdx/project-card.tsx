import React from "react"
import Link from "next/link"
import { ArrowRight, LucideIcon } from "lucide-react"
import { Database, Code2, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ProjectCardProps {
  icon?: string
  title: string
  subtitle: string
  href: string
  variant?: "primary" | "accent" | "chart-3"
  children: React.ReactNode
}

const iconMap = {
  Database,
  Code2,
  Wrench,
} as const

const variantClasses = {
  primary: {
    card: "group hover:border-primary/50 transition-all duration-300",
    iconBg: "bg-primary/10 group-hover:bg-primary/20",
    iconColor: "text-primary",
    button: "text-primary hover:text-primary",
  },
  accent: {
    card: "group hover:border-accent/50 transition-all duration-300",
    iconBg: "bg-accent/10 group-hover:bg-accent/20",
    iconColor: "text-accent",
    button: "text-accent hover:text-accent",
  },
  "chart-3": {
    card: "group hover:border-chart-3/50 transition-all duration-300",
    iconBg: "bg-chart-3/10 group-hover:bg-chart-3/20",
    iconColor: "text-chart-3",
    button: "text-chart-3 hover:text-chart-3",
  },
}

export function ProjectCard({
  icon,
  title,
  subtitle,
  href,
  variant = "primary",
  children,
}: ProjectCardProps) {
  const IconComponent = icon ? iconMap[icon as keyof typeof iconMap] : null
  const classes = variantClasses[variant]

  return (
    <Card className={classes.card}>
      <CardHeader className="pb-3 md:pb-6">
        {IconComponent && (
          <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-3 md:mb-4 transition-colors ${classes.iconBg}`}>
            <IconComponent className={`w-5 h-5 md:w-6 md:h-6 ${classes.iconColor}`} />
          </div>
        )}
        <CardTitle className="text-lg md:text-xl">{title}</CardTitle>
        <CardDescription className="text-sm md:text-base">{subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="text-sm text-muted-foreground mb-3 md:mb-4 leading-relaxed prose prose-sm max-w-none">
          {children}
        </div>
        <Link href={href}>
          <Button
            variant="ghost"
            className={`group/btn py-3 px-2 min-h-[44px] font-normal text-sm cursor-pointer ${classes.button}`}
          >
            Learn about {title}
            <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
