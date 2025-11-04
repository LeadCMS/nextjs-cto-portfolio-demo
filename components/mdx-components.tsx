import { HeroSection, ProjectCard, ProjectGrid, DynamicProjectGrid, ContactSection, Button, NotFoundSection } from "./mdx"

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
    Button,
    NotFoundSection,
    // Allow overrides
    ...otherComponents,
  }
}
