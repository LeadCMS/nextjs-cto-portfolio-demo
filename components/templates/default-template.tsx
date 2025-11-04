import { MDXRemote } from "next-mdx-remote-client/rsc"
import { useMDXComponents } from "@/components/mdx-components"
import { CMSContent } from "@leadcms/sdk"

export interface TemplateProps {
  content: CMSContent
  userUid?: string | null
}

/**
 * Default template for home and other content types
 * Renders full-width MDX content with proper prose styling
 */
export default function DefaultTemplate({ content, userUid }: TemplateProps) {
  const components = useMDXComponents({ userUid })

  return (
    <div className="min-h-screen">
      <article className="prose prose-lg dark:prose-invert max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MDXRemote source={content.body} components={components} />
      </article>
    </div>
  )
}
