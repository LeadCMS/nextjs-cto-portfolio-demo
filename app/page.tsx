import Link from "next/link"
import { ArrowRight, Code2, Database, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-base md:text-lg font-semibold tracking-tight">
              CTO Portfolio
            </Link>
            <div className="flex items-center gap-4 md:gap-8">
              <Link
                href="#projects"
                className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          <div className="flex-1 max-w-3xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6 text-balance">
              CTO, Founder & Tech Visionary with 20 Years in Tech
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-3 md:mb-4 leading-relaxed">
              Web, Cloud, DevOps & AI Specialist
            </p>
            <div className="prose prose-invert max-w-none">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I am a founding CTO and software architect with nearly 20 years of experience delivering high-impact
                software solutions. My journey spans leading development teams at global tech firms and launching my own
                startups. I specialize in web and backend development, scalable cloud architectures, DevOps automation,
                and AI-driven product innovation. I'm passionate about leveraging the latest technologies — from
                advanced web frameworks to AI tools like GitHub Copilot, ChatGPT, and Vercel's V0 — to build products
                faster and smarter. Currently, I'm focused on AI-first platforms and exploring cutting-edge concepts
                like Model Context Protocol (MCP), vector embeddings, and agentic AI, with plans to integrate these into
                my upcoming projects.
              </p>
            </div>
          </div>
          <div className="flex-shrink-0 w-full md:w-auto flex flex-col items-center md:items-start">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-border/40">
              <Image
                src="/images/design-mode/1727729468073.jpeg"
                alt="Peter L."
                width={256}
                height={256}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <p className="text-xl md:text-2xl font-semibold mt-4 text-center md:text-left">Peter L.</p>
            <div className="mt-4 max-w-xs text-center md:text-left">
              <p className="text-sm md:text-base text-muted-foreground italic leading-relaxed">
                "For myself I am an optimist — it does not seem to be much use being anything else."
              </p>
              <p className="text-xs text-muted-foreground/60 mt-2">
                — Winston Churchill, Lord Mayor's Banquet, London, November 9, 1954
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 md:mb-12">Featured Projects</h2>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          <Card className="group hover:border-primary/50 transition-all duration-300">
            <CardHeader className="pb-3 md:pb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary/20 transition-colors">
                <Database className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <CardTitle className="text-lg md:text-xl">XLTools.net</CardTitle>
              <CardDescription className="text-sm md:text-base">Excel Productivity Suite</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground mb-3 md:mb-4 leading-relaxed">
                Founder & CTO. XLTools is a powerful Excel add-in designed for business users, enabling them to prepare
                data, track changes, and automate tasks within Excel. I led the product from concept to a tool that
                thousands of professionals rely on.
              </p>
              <Link href="/projects/xltools">
                <Button
                  variant="ghost"
                  className="group/btn p-0 h-auto font-normal text-primary hover:text-primary text-sm"
                >
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="group hover:border-accent/50 transition-all duration-300">
            <CardHeader className="pb-3 md:pb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-accent/20 transition-colors">
                <Code2 className="w-5 h-5 md:w-6 md:h-6 text-accent" />
              </div>
              <CardTitle className="text-lg md:text-xl">LeadCMS.ai</CardTitle>
              <CardDescription className="text-sm md:text-base">AI-Powered CMS/CRM</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground mb-3 md:mb-4 leading-relaxed">
                Co-founder & CTO. LeadCMS is an AI-first headless CMS & CRM platform that helps developers build
                lightning-fast websites with automated content creation. I spearhead the development of this open-source
                project, combining a robust .NET backend with AI integrations.
              </p>
              <Link href="/projects/leadcms">
                <Button
                  variant="ghost"
                  className="group/btn p-0 h-auto font-normal text-accent hover:text-accent text-sm"
                >
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="group hover:border-chart-3/50 transition-all duration-300">
            <CardHeader className="pb-3 md:pb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-chart-3/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-chart-3/20 transition-colors">
                <Wrench className="w-5 h-5 md:w-6 md:h-6 text-chart-3" />
              </div>
              <CardTitle className="text-lg md:text-xl">TagPoint.co.uk</CardTitle>
              <CardDescription className="text-sm md:text-base">Smart CMMS Platform</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground mb-3 md:mb-4 leading-relaxed">
                Co-founder & CTO. TagPoint is an innovative CMMS (maintenance management) solution that takes care of
                facilities, assets, and service requests. I architected TagPoint's platform, utilizing QR-code asset
                tagging and real-time analytics to modernize facility management.
              </p>
              <Link href="/projects/tagpoint">
                <Button
                  variant="ghost"
                  className="group/btn p-0 h-auto font-normal text-chart-3 hover:text-chart-3 text-sm"
                >
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-16 mb-8 md:mb-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 md:mb-4">Get in Touch</h2>
          <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8 leading-relaxed">
            Have an inquiry or an idea to discuss? I'd love to hear from you. Fill out the form below and I'll respond
            as soon as possible.
          </p>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 mt-12 md:mt-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-8">
          <p className="text-xs md:text-sm text-muted-foreground">
            Built with{" "}
            <a
              href="https://leadcms.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              LeadCMS.ai
            </a>{" "}
            — an example of what our headless CMS can do.
          </p>
        </div>
      </footer>
    </div>
  )
}
