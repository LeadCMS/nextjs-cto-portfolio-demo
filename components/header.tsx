import Link from "next/link"
import { loadContentConfigStrict } from "@leadcms/sdk"

export function Header() {
  const locale = process.env.LEADCMS_DEFAULT_LANGUAGE || process.env.NEXT_PUBLIC_LEADCMS_DEFAULT_LANGUAGE || "en"
  
  let config: {
    logo: { text: string; href: string }
    navigation: Array<{ label: string; href: string }>
  }
  
  try {
    config = loadContentConfigStrict("header", locale) as typeof config
  } catch (error) {
    throw new Error(
      `Header configuration not found. Please ensure header.json exists in .leadcms/content/ ` +
      `or run 'npx leadcms pull' to sync content from LeadCMS.`
    )
  }

  return (
    <nav className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <Link href={config.logo.href} className="text-base md:text-lg font-semibold tracking-tight">
            {config.logo.text}
          </Link>
          <div className="flex items-center gap-4 md:gap-8">
            {config.navigation.map((item: { label: string; href: string }) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
