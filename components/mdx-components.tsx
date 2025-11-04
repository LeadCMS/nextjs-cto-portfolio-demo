import { HeroSection, ProjectCard, ProjectGrid, DynamicProjectGrid, ContactSection } from "./mdx"

/**
 * Registry of all available MDX components
 * These components can be used directly in MDX files
 */
export function useMDXComponents(components: Record<string, any> = {}) {
  const { userUid, ...otherComponents } = components
  
  return {
    // Custom MDX components with userUid context
    HeroSection,
    ProjectCard,
    ProjectGrid,
    DynamicProjectGrid: (props: any) => <DynamicProjectGrid {...props} userUid={userUid} />,
    ContactSection,
    // Allow overrides
    ...otherComponents,
  }
}
