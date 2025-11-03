import { HeroSection, ProjectCard, ProjectGrid, ContactSection } from "./mdx"

/**
 * Registry of all available MDX components
 * These components can be used directly in MDX files
 */
export function useMDXComponents(components: Record<string, any> = {}) {
  return {
    // Custom MDX components
    HeroSection,
    ProjectCard,
    ProjectGrid,
    ContactSection,
    // Allow overrides
    ...components,
  }
}
