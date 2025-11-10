import { getCMSContentBySlugForLocale, getConfig } from "@leadcms/sdk"
import { getTemplate } from "@/components/templates"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

/**
 * Next.js not-found page
 * Loads content from LeadCMS not-found.mdx file
 */
export default function NotFound() {
  const sdkConfig = getConfig()
  const locale = sdkConfig.defaultLanguage
  
  // Load not-found content from CMS - fail if missing
  const cmsContent = getCMSContentBySlugForLocale("not-found", locale)
  
  if (!cmsContent) {
    throw new Error(
      "Not-found page content missing. Please ensure not-found.mdx exists in .leadcms/content/ " +
      "with slug: 'not-found' and type: 'not-found' or run 'npx leadcms pull' to sync content from LeadCMS."
    )
  }

  if (!cmsContent.type) {
    throw new Error(
      "Not-found page type is missing. " +
      "Please ensure not-found.mdx has 'type: \"not-found\"' field in frontmatter."
    )
  }

  const Template = getTemplate(cmsContent.type)

  return (
    <>
      <Header userUid={null} />
      <Template content={cmsContent} userUid={null} />
      <Footer userUid={null} />
    </>
  )
}