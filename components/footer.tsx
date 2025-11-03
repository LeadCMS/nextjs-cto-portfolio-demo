import { loadContentConfigStrict } from "@leadcms/sdk"

export function Footer() {
  const locale = process.env.LEADCMS_DEFAULT_LANGUAGE || process.env.NEXT_PUBLIC_LEADCMS_DEFAULT_LANGUAGE || "en"
  
  let config: {
    text: string
    link: { text: string; href: string }
    suffix: string
  }
  
  try {
    config = loadContentConfigStrict("footer", locale) as typeof config
  } catch (error) {
    throw new Error(
      `Footer configuration not found. Please ensure footer.json exists in .leadcms/content/ ` +
      `or run 'npx leadcms pull' to sync content from LeadCMS.`
    )
  }

  return (
    <footer className="border-t border-border/40 mt-12 md:mt-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-8">
        <p className="text-xs md:text-sm text-muted-foreground">
          {config.text}{" "}
          <a
            href={config.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            {config.link.text}
          </a>{" "}
          {config.suffix}
        </p>
      </div>
    </footer>
  )
}
