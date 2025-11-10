import type { Metadata } from "next"
import { getAllContentSlugsForLocale, getCMSContentBySlugForLocale, extractUserUidFromSlug, getConfig } from "@leadcms/sdk"
import { generatePageMetadata } from "@/lib/metadata"
import { getTemplate } from "@/components/templates"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { pagesContentTypes } from "@/lib/constants"

export function generateStaticParams() {
  const sdkConfig = getConfig()
  const locale = sdkConfig.defaultLanguage
  
  // Get published content for page content types only (excludes components like header, footer, etc.)
  const publishedSlugs = getAllContentSlugsForLocale(locale, pagesContentTypes)
    
  const staticParams = publishedSlugs.map((slug) => ({
    slug: slug.split("/"),
  }))

  return staticParams
}

interface PageProps {
  params: Promise<{
    slug: string[]
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const sdkConfig = getConfig()
  const locale = sdkConfig.defaultLanguage
  const resolvedParams = await params
  const slug = resolvedParams.slug.join("/")
  
  // Extract userUid from slug if it's a preview slug
  const userUid = extractUserUidFromSlug(slug)
  const includeDrafts = !!userUid
  
  const cmsContent = getCMSContentBySlugForLocale(slug, locale, includeDrafts)
  
  if (!cmsContent) {
    return {}
  }

  return generatePageMetadata(cmsContent, slug, userUid)
}

export default async function Page({ params }: PageProps) {
  const sdkConfig = getConfig()
  const locale = sdkConfig.defaultLanguage
  const resolvedParams = await params
  const slug = resolvedParams.slug.join("/")
  
  // Extract userUid from slug if it's a preview slug (contains GUID pattern)
  const userUid = extractUserUidFromSlug(slug)
  const includeDrafts = !!userUid
  
  const cmsContent = getCMSContentBySlugForLocale(slug, locale, includeDrafts)

  if (!cmsContent) {
    throw new Error(
      `Content not found for slug: ${slug}. Please ensure the corresponding MDX file exists in .leadcms/content/ ` +
      `or run 'npx leadcms pull' to sync content from LeadCMS.`
    )
  }
  
  if (!cmsContent.type) {
    throw new Error(
      `Content type is missing for slug: ${slug}. ` +
      `Please ensure the MDX file has 'type' field in frontmatter.`
    )
  }

  const Template = getTemplate(cmsContent.type)

  return (
    <>
      <Header userUid={userUid} />
      <Template content={cmsContent} userUid={userUid} />
      <Footer userUid={userUid} />
    </>
  )
}
