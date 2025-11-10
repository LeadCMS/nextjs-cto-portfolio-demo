import Link from "next/link"
import { loadContentConfigStrict, getConfig } from "@leadcms/sdk"
import { ThemeSwitcher } from "@/components/theme-switcher"

interface HeaderProps {
  userUid?: string | null
}

export function Header({ userUid }: HeaderProps) {
  const sdkConfig = getConfig()
  const locale = sdkConfig.defaultLanguage
  
  let headerConfig: {
    logo: { text: string; href: string }
    navigation: Array<{ label: string; href: string }>
  }
  
  try {
    headerConfig = loadContentConfigStrict("header", locale, userUid) as typeof headerConfig
  } catch (error) {
    throw new Error(
      `Header configuration not found. Please ensure header.json exists in .leadcms/content/ ` +
      `${userUid ? `(checked for user-specific version: header-${userUid}.json) ` : ''}` +
      `or run 'npx leadcms pull' to sync content from LeadCMS.`
    )
  }

  return (
    <nav className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <Link href={headerConfig.logo.href} className="text-base md:text-lg font-semibold tracking-tight">
            {headerConfig.logo.text}
          </Link>
          <div className="flex items-center gap-4 md:gap-8">
            {headerConfig.navigation.map((item: { label: string; href: string }) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors py-2 px-1 min-h-[44px] flex items-center"
              >
                {item.label}
              </Link>
            ))}
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </nav>
  )
}
