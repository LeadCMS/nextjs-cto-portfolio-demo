import { getAllContentSlugsForLocale, getCMSContentBySlugForLocale, extractUserUidFromSlug } from "@leadcms/sdk"
import { getTemplate } from "@/components/templates"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export function generateStaticParams() {
  const locale = process.env.LEADCMS_DEFAULT_LANGUAGE || process.env.NEXT_PUBLIC_LEADCMS_DEFAULT_LANGUAGE || "en"
  
  // Get published content
  const publishedSlugs = getAllContentSlugsForLocale(locale)
    
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

export default async function Page({ params }: PageProps) {
  const locale = process.env.LEADCMS_DEFAULT_LANGUAGE || process.env.NEXT_PUBLIC_LEADCMS_DEFAULT_LANGUAGE || "en"
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
