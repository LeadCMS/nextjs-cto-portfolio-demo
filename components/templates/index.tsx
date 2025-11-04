import React from "react"
import DefaultTemplate from "./default-template"
import ProjectTemplate from "./project-template"
import NotFoundTemplate from "./not-found-template"
import { CMSContent } from "@leadcms/sdk"

export type TemplateComponent = (props: { 
  content: CMSContent
  userUid?: string | null
}) => React.JSX.Element

/**
 * Template registry maps content types to their corresponding templates
 */
export const templateRegistry: Record<string, TemplateComponent> = {
  project: ProjectTemplate,
  home: DefaultTemplate,
  "not-found": NotFoundTemplate,
}

/**
 * Gets the appropriate template for a content type
 * Falls back to DefaultTemplate if no specific template is registered
 */
export function getTemplate(type: string): TemplateComponent {
  return templateRegistry[type] || DefaultTemplate
}
