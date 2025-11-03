import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function TagPointPage() {
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
          <Badge className="mb-4 bg-chart-3 text-foreground">Facility Management</Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">TagPoint.co.uk</h1>
          <p className="text-xl text-muted-foreground">Smart CMMS Platform</p>
        </div>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            TagPoint is a QR-code-powered maintenance management system (CMMS) for facilities and assets. It allows
            businesses (from office complexes to hotels) to log service requests, schedule preventive maintenance, and
            track assets all in one place. The system is easy-to-use for both managers and field technicians, employing
            smartphone QR code scans to streamline operations.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Role & Contributions</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            As Co-founder and CTO of TagPoint, I oversaw the development of the platform from scratch. I guided the
            product strategy to focus on simplicity and mobile-first design for field teams. I led a distributed
            development team to build features like the QR code check-in system for maintenance tasks, real-time
            notification workflows, and an analytics dashboard for facility managers. I also coordinated closely with
            early clients in the hospitality and corporate sectors to refine the product-market fit.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Key Features & Achievements</h2>
          <ul className="space-y-3 mb-8">
            <li className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">End-to-End Maintenance Workflow:</strong> Users can scan a QR code at
              an asset's location to instantly log a service request, which our system turns into a trackable work order
              — eliminating paperwork and phone calls.
            </li>
            <li className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Preventive Maintenance Scheduling:</strong> Implemented a scheduler
              for routine inspections and maintenance tasks, enabling companies to fix issues proactively rather than
              reactively.
            </li>
            <li className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Customer Interaction Module:</strong> Developed features for customer
              feedback and announcements, so facilities can loop occupants into the maintenance process (e.g., notify
              residents of upcoming repairs).
            </li>
            <li className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Fast Deployment:</strong> Delivered TagPoint as a cloud service that
              can be deployed within days for a new client, thanks to a modular setup and configuration toolkit. This
              drastically reduced onboarding time.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
          <div className="flex flex-wrap gap-2 mb-8">
            <Badge variant="secondary">Node.js</Badge>
            <Badge variant="secondary">.NET</Badge>
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">Flutter</Badge>
            <Badge variant="secondary">Azure Cloud</Badge>
            <Badge variant="secondary">QR Code Integration</Badge>
          </div>

          <a href="https://tagpoint.co.uk" target="_blank" rel="noopener noreferrer">
            <Button className="group bg-chart-3 hover:bg-chart-3/90 text-foreground">
              Visit TagPoint Website
              <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </a>
        </div>
      </article>
    </div>
  )
}
