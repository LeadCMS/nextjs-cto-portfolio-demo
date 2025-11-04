import { MDXRemote } from "next-mdx-remote-client/rsc"
import { useMDXComponents } from "@/components/mdx-components"
import { CMSContent } from "@leadcms/sdk"

export interface NotFoundTemplateProps {
  content: CMSContent
  userUid?: string | null
}

/**
 * Template for 404 not-found pages
 * Uses full-width layout with error styling
 */
export default function NotFoundTemplate({ content, userUid }: NotFoundTemplateProps) {
  const components = useMDXComponents({ userUid })

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <article className="prose prose-lg dark:prose-invert max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <MDXRemote source={content.body} components={components} />
      </article>
    </div>
  )
}