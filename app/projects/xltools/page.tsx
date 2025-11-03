import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function XLToolsPage() {
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
          <Badge className="mb-4 bg-primary text-primary-foreground">Excel Productivity</Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">XLTools.net</h1>
          <p className="text-xl text-muted-foreground">Excel Productivity Suite</p>
        </div>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            XLTools is an Excel add-in that supercharges productivity for business users inside Excel. It provides a
            suite of 20+ tools and features right on the Excel ribbon, helping users with everything from version
            control to cleaning data.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Role & Contributions</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            As the Founder and CTO of XLTools, I led the end-to-end development of the product. I designed its
            architecture and implemented core features like the version control for Excel workbooks, a SQL query
            interface for data merging in Excel, and a one-click PDF export feature. I also established a licensing
            model and built a support knowledge base for our users.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Key Features & Achievements</h2>
          <ul className="space-y-3 mb-8">
            <li className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Excel Version Control:</strong> Introduced version control, allowing
              users to track changes in spreadsheets – a capability previously missing in Excel.
            </li>
            <li className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Popup Calendar:</strong> Developed a Popup Calendar for date picking
              in cells, making date-entry faster and error-free.
            </li>
            <li className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Data Cleaning Tools:</strong> Implemented data cleaning tools (remove
              duplicates, trim spaces, etc.) that cut down manual cleanup time by 80%.
            </li>
            <li className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">User Adoption:</strong> Grew XLTools to tens of thousands of downloads
              worldwide, with a 4.8/5 average user rating.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
          <div className="flex flex-wrap gap-2 mb-8">
            <Badge variant="secondary">C# VSTO Add-in</Badge>
            <Badge variant="secondary">.NET Framework</Badge>
            <Badge variant="secondary">Excel VSTO API</Badge>
            <Badge variant="secondary">WiX Installer</Badge>
            <Badge variant="secondary">.NET Licensing</Badge>
          </div>

          <a href="https://xltools.net" target="_blank" rel="noopener noreferrer">
            <Button className="group bg-primary hover:bg-primary/90 text-primary-foreground">
              Visit XLTools Website
              <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </a>
        </div>
      </article>
    </div>
  )
}
