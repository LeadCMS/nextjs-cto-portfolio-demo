import type { Metadata } from "next"
import { getCMSContentBySlugForLocale } from "@leadcms/sdk"
import { generatePageMetadata } from "@/lib/metadata"
import { getTemplate } from "@/components/templates"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export function generateMetadata(): Metadata {
  const locale = process.env.LEADCMS_DEFAULT_LANGUAGE || process.env.NEXT_PUBLIC_LEADCMS_DEFAULT_LANGUAGE || "en"
  const cmsContent = getCMSContentBySlugForLocale("home", locale)
  
  if (!cmsContent) {
    return {}
  }

  return generatePageMetadata(cmsContent, "home")
}

export default function Home() {
  const locale = process.env.LEADCMS_DEFAULT_LANGUAGE || process.env.NEXT_PUBLIC_LEADCMS_DEFAULT_LANGUAGE || "en"
  const cmsContent = getCMSContentBySlugForLocale("home", locale)
  
  if (!cmsContent) {
    throw new Error(
      "Homepage content not found. Please ensure home.mdx exists in .leadcms/content/ with slug: 'home' " +
      "or run 'npx leadcms pull' to sync content from LeadCMS."
    )
  }

  if (!cmsContent.type) {
    throw new Error(
      "Homepage type is missing. " +
      "Please ensure home.mdx has 'type' field in frontmatter."
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
