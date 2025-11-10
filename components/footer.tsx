import { loadContentConfigStrict, getConfig } from "@leadcms/sdk"

interface FooterProps {
  userUid?: string | null
}

export function Footer({ userUid }: FooterProps) {
  const sdkConfig = getConfig()
  const locale = sdkConfig.defaultLanguage
  
  let footerConfig: {
    text: string
    link: { text: string; href: string }
    suffix: string
  }
  
  try {
    footerConfig = loadContentConfigStrict("footer", locale, userUid) as typeof footerConfig
  } catch (error) {
    throw new Error(
      `Footer configuration not found. Please ensure footer.json exists in .leadcms/content/ ` +
      `${userUid ? `(checked for user-specific version: footer-${userUid}.json) ` : ''}` +
      `or run 'npx leadcms pull' to sync content from LeadCMS.`
    )
  }

  return (
    <footer className="border-t border-border/40 mt-12 md:mt-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-8">
        <p className="text-sm text-muted-foreground">
          {footerConfig.text}{" "}
          <a
            href={footerConfig.link.href}
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {footerConfig.link.text}
          </a>{" "}
          {footerConfig.suffix}
        </p>
      </div>
    </footer>
  )
}
