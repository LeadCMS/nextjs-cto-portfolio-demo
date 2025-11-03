import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function LeadCMSPage() {
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
          <Badge className="mb-4 bg-accent text-accent-foreground">AI-Powered CMS</Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">LeadCMS.ai</h1>
          <p className="text-xl text-muted-foreground">AI-Powered Headless CMS & CRM Platform</p>
        </div>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            LeadCMS is an open-source headless CMS and CRM platform that uses AI to accelerate content creation and lead
            management. It's designed for modern web frameworks – perfect for integrating with Next.js, Gatsby, and
            others – to build lightning-fast websites with AI-generated content.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Role & Contributions</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            As Co-founder and CTO, I drive the product vision and engineering for LeadCMS. I architected the backend in
            .NET for high performance and scalability, and implemented key features like the RESTful API and plugin
            system. I'm also hands-on with integrating AI features – for example, connecting OpenAI's GPT models to
            enable one-click content generation and smart content optimization within the CMS.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Key Features & Achievements</h2>
          <ul className="space-y-3 mb-8">
            <li className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">AI Content Generation:</strong> Built-in AI tools that can generate
              and optimize web content on the fly, reducing content creation time dramatically.
            </li>
            <li className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Unified CMS+CRM:</strong> Combines content management with customer
              data tracking – e.g., automatic lead enrichment and journey tracking – into one platform.
            </li>
            <li className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Open Source & Extensible:</strong> LeadCMS is 100% open source (MIT
              licensed) and modular. I ensured developers can easily extend it via a plugin architecture or by forking
              the source.
            </li>
            <li className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Rapid Deployment:</strong> Provided Docker-based deployment for quick
              setup (just one command to get started), which helps teams try the platform in minutes.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
          <div className="flex flex-wrap gap-2 mb-8">
            <Badge variant="secondary">ASP.NET Core (C#)</Badge>
            <Badge variant="secondary">PostgreSQL</Badge>
            <Badge variant="secondary">Docker</Badge>
            <Badge variant="secondary">Kubernetes</Badge>
            <Badge variant="secondary">Next.js</Badge>
            <Badge variant="secondary">OpenAI API</Badge>
          </div>

          <div className="flex gap-4">
            <a href="https://leadcms.ai" target="_blank" rel="noopener noreferrer">
              <Button className="group bg-accent hover:bg-accent/90 text-accent-foreground">
                Visit LeadCMS.ai
                <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </a>
            <a href="https://github.com/peterliapin" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="group bg-transparent">
                Explore on GitHub
                <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </article>
    </div>
  )
}
