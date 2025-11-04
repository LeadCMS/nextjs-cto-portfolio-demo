# LeadCMS + Next.js Portfolio Demo

**A demonstration project showcasing Next.js static site integration with LeadCMS headless CMS.**

This portfolio site for CTO Peter L. serves as a practical example of how to:
- ✅ Build a static Next.js site powered by LeadCMS
- ✅ Separate content (MDX/JSON) from presentation (React components)
- ✅ Use MDX components for rich, editable content
- ✅ Deploy as a fully static site with zero runtime dependencies
- ✅ Set up CI/CD with GitHub Actions and Docker

## Architecture

The site follows the LeadCMS architecture pattern:

- **Content** lives in `.leadcms/content/` as MDX and JSON files
- **Presentation** is handled by React components in `components/`
- **Templates** in `components/templates/` control how different content types are rendered
- **No fallback content** - the build fails if required content is missing

## Content Structure

```
.leadcms/content/
├── metadata.json          # Site-wide metadata
├── header.json           # Header navigation configuration
├── footer.json           # Footer configuration
├── contact-us-form.json  # Contact form configuration
├── home.mdx              # Homepage content
└── projects/             # Project pages
    ├── xltools.mdx
    ├── leadcms.mdx
    └── tagpoint.mdx
```

## MDX Components

The following components are available in MDX files:

- `<HeroSection>` - Hero section with profile image and bio
- `<ProjectCard>` - Individual project card
- `<ProjectGrid>` - Grid container for project cards
- `<ContactSection>` - Contact form section

## Content Types

- **home** - Homepage (uses DefaultTemplate)
- **project** - Project detail pages (uses ProjectTemplate)

## Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production (includes content fetch)
- `pnpm run pull` - Fetch latest content from LeadCMS
- `pnpm run start` - Start production server

### Docker Scripts

- `pnpm run docker:build` - Build static production Docker image
- `pnpm run docker:run` - Run static production Docker image
- `pnpm run docker:preview:build` - Build preview development Docker image
- `pnpm run docker:preview:run` - Run preview development Docker image

## Environment Variables

Required environment variables in `.env`:

```bash
LEADCMS_API_KEY=your-api-key
LEADCMS_URL=https://your-cms-name.leadcms.ai
LEADCMS_DEFAULT_LANGUAGE=en
```

**Note:** Replace `https://your-cms-name.leadcms.ai` with your actual LeadCMS instance URL.

## Static Export

The site is configured for static export in production:

- All pages are pre-rendered at build time
- Dynamic routes use `generateStaticParams`
- Images are unoptimized for static deployment

## Adding New Content

### Add a New Page

1. Create an MDX file in `.leadcms/content/`
2. Add frontmatter with `title`, `description`, `slug`, and `type`
3. Use existing MDX components to compose the page
4. The page will automatically be generated

### Add a New MDX Component

1. Create component in `components/mdx/`
2. Export from `components/mdx/index.tsx`
3. Register in `components/mdx-components.tsx`
4. Use in MDX files

### Add a New Template

1. Create template in `components/templates/`
2. Register in `components/templates/index.tsx`
3. Use by setting `type` in content frontmatter

## Key Principles

1. **No hardcoded content** - All content comes from `.leadcms/content/`
2. **Content inside tags** - MDX components accept content as children, not JSON props
3. **Fail builds** - Missing content throws errors instead of showing fallbacks
4. **Semantic names** - Components have clear, descriptive names
5. **Static export compatible** - No server-side features, all generated at build time

## Development

Start the development server:

```bash
pnpm run dev
```

Visit http://localhost:3000 to see the site.

## Production Build

Build the site for production:

```bash
pnpm run build
```

This will:
1. Fetch latest content from LeadCMS
2. Generate all static pages
3. Export to the `out/` directory

## Docker Images

The project provides two Docker images for different use cases:

### 1. Static Production Image (nginx)
Pre-built static site served by nginx - ready for production deployment.

```bash
# Pull from Docker Hub
docker pull leadcms/nextjs-cto-portfolio-static:latest

# Run the container (with LeadCMS URL for contact form)
docker run -p 80:80 \
  -e NEXT_PUBLIC_LEADCMS_URL=https://your-cms-name.leadcms.ai \
  leadcms/nextjs-cto-portfolio-static:latest
```

**Features:**
- ✅ Fully static HTML/CSS/JS (no server-side runtime)
- ✅ Runtime environment injection for client-side API calls
- ✅ Optimized nginx configuration
- ✅ Small image size (~50MB)
- ✅ Fast startup time
- ✅ Production-ready

**Note:** The `NEXT_PUBLIC_LEADCMS_URL` environment variable is injected at container startup and made available to client-side JavaScript for features like the contact form.

### 2. Preview Development Image (multi-service)
Full development environment with live preview and content watching.

```bash
# Pull from Docker Hub
docker pull leadcms/nextjs-cto-portfolio-preview:latest

# Run with LeadCMS connection (API key required)
docker run -p 80:80 \
  -e LEADCMS_URL=https://your-cms-name.leadcms.ai \
  -e LEADCMS_API_KEY=your-api-key \
  leadcms/nextjs-cto-portfolio-preview:latest

# With custom language
docker run -p 80:80 \
  -e LEADCMS_URL=https://your-cms-name.leadcms.ai \
  -e LEADCMS_API_KEY=your-api-key \
  -e LEADCMS_DEFAULT_LANGUAGE=en \
  leadcms/nextjs-cto-portfolio-preview:latest
```

**Features:**
- ✅ Next.js dev server with hot reload
- ✅ LeadCMS content watcher (live updates via SSE)
- ✅ Nginx reverse proxy
- ✅ Supervisor for multi-service management
- ✅ Ideal for preview environments

**Required Environment Variables:**
- `LEADCMS_URL` - LeadCMS instance URL
- `LEADCMS_API_KEY` - API key for live watch mode (**required** for preview container)

**Optional Environment Variables:**
- `LEADCMS_DEFAULT_LANGUAGE` - Default language (defaults to `en`)

## Deployment

### Static Hosting (Recommended)
Deploy the `out/` directory to any static hosting service:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **Cloudflare Pages**
- **AWS S3 + CloudFront**
- **GitHub Pages**

### Docker Deployment
Use the static Docker image for containerized deployments:

```bash
# Production deployment
docker run -d -p 80:80 --name portfolio \
  --restart unless-stopped \
  -e NEXT_PUBLIC_LEADCMS_URL=https://your-cms-name.leadcms.ai \
  leadcms/nextjs-cto-portfolio-static:latest
```

**Environment Variables:**
- `NEXT_PUBLIC_LEADCMS_URL` - Required for client-side features (contact form submissions)

### CI/CD Pipeline
The project includes automated GitHub Actions workflow (`.github/workflows/build-and-push.yml`) that:
- ✅ Builds static site on every commit to `main`/`develop`
- ✅ Uploads build artifacts (downloadable from Actions tab)
- ✅ Builds and pushes Docker images to Docker Hub
- ✅ Tags images by branch and commit SHA

**Note:** The pipeline builds and pushes artifacts but does not automatically deploy them. You'll need to set up deployment separately based on your hosting choice.

## About This Demo

This project demonstrates:

1. **LeadCMS Integration** - Content managed in LeadCMS, synced via SDK
2. **Static Generation** - Full static export with `output: "export"`
3. **MDX Components** - Rich content composition with custom React components
4. **Template System** - Different layouts for different content types
5. **CI/CD Pipeline** - Automated builds and Docker images with GitHub Actions
6. **Best Practices** - No hardcoded content, fail-fast builds, semantic components

**Live Site:** https://liapin.space (Portfolio of CTO Peter L.)

## Learn More

- [LeadCMS Documentation](https://leadcms.ai/docs/)
- [Next.js Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [MDX Documentation](https://mdxjs.com/)

## License

This demo project is open source and available for learning purposes.
