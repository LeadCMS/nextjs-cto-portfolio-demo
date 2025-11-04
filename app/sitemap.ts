import { type MetadataRoute } from "next";
import { getAllContentSlugsForLocale } from "@leadcms/sdk";
import metadataJson from "@/.leadcms/content/metadata.json";
import { pagesContentTypes } from "@/lib/constants";

type SitemapEntry = MetadataRoute.Sitemap[number];

const homePageSlug = "home";
const baseUrl = metadataJson.siteMetadata.baseUrl;

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const locale = process.env.LEADCMS_DEFAULT_LANGUAGE || process.env.NEXT_PUBLIC_LEADCMS_DEFAULT_LANGUAGE || "en";
  
  // Get all published content slugs filtered by page content types only
  const allSlugs = getAllContentSlugsForLocale(locale, pagesContentTypes);
  
  // Filter out home page and empty slugs
  const contentSlugs = allSlugs.filter((slug) => slug !== homePageSlug && slug !== "");

  const sitemapEntries: MetadataRoute.Sitemap = [
    // Homepage
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // Content pages
    ...contentSlugs.map<SitemapEntry>((slug) => ({
      url: new URL(slug, baseUrl).toString(),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    })),
  ];

  return sitemapEntries;
}