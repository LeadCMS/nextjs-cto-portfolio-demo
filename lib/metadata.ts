import type { Metadata } from "next"
import type { CMSContent } from "@leadcms/sdk"

import metadataJson from "@/.leadcms/content/metadata.json"

/**
 * Generate page-specific metadata for CMS content
 */
export function generatePageMetadata(
  cmsContent: CMSContent,
  slug: string,
  userUid?: string | null
): Metadata {
  // Clean slug for URL (remove userUid if present)  
  const cleanSlug = userUid ? slug.replace(`-${userUid}`, '') : slug
  const pageUrl = slug === 'home' ? metadataJson.siteMetadata.baseUrl : `${metadataJson.siteMetadata.baseUrl}/${cleanSlug}`
  
  return {
    title: cmsContent.title,
    description: cmsContent.description,
    keywords: cmsContent.tags,
    openGraph: {
      ...metadataJson.siteMetadata.openGraph,
      title: cmsContent.title,
      description: cmsContent.description,
      url: pageUrl,
      images: cmsContent.coverImageUrl ? [
        {
          url: cmsContent.coverImageUrl,
          alt: cmsContent.coverImageAlt || cmsContent.title,
        }
      ] : undefined,
    },
    twitter: {
      ...metadataJson.siteMetadata.twitter,
      title: cmsContent.title,
      description: cmsContent.description,
      //images: cmsContent.coverImageUrl ? [cmsContent.coverImageUrl] : undefined,
    },
    // Add noindex for preview pages
    ...(userUid && {
      robots: {
        index: false,
        follow: false,
      }
    }),
  }
}