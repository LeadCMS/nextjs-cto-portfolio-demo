import React from "react"

/**
 * Extracts plain text content from React children, useful for MDX components
 * that need to avoid the automatic <p> wrapper that MDX adds to text content.
 * 
 * Use this for components like buttons, badges, labels where you need plain text.
 */
export function getTextContent(children: React.ReactNode): string {
  if (typeof children === "string") {
    return children
  }
  
  if (Array.isArray(children)) {
    return children.map(getTextContent).join("")
  }
  
  if (React.isValidElement(children)) {
    const props = children.props as { children?: React.ReactNode }
    if (props.children) {
      return getTextContent(props.children)
    }
  }
  
  return ""
}
