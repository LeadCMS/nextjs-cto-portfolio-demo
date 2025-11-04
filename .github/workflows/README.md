# CI/CD Pipeline Documentation

This directory contains GitHub Actions workflows for automating the build and deployment process.

## Three Deployment Approaches

This project provides **three separate workflows** to showcase different deployment strategies:

| Workflow | Output | Best For |
|----------|--------|----------|
| **build-static-artifact.yml** | ZIP artifact | Vercel, Netlify, S3 |
| **build-static-docker.yml** | nginx Docker image | Kubernetes, Cloud Run |
| **build-preview-docker.yml** | Dev server Docker image | Preview environments |

## Workflow 1: Static Artifact

Builds Next.js static site and uploads as downloadable ZIP.

**Triggers:** Push to `develop`/`main`, manual dispatch

**Output:** GitHub artifact `nextjs-cto-portfolio-static-{branch}.zip`

**Use for:** Static hosting services (Vercel, Netlify, S3)

## Workflow 2: Static Docker

Builds static site + packages into nginx Docker image.

**Triggers:** Push to `develop`/`main`, manual dispatch

**Output:** `leadcms/nextjs-cto-portfolio-static` Docker image

**Use for:** Container platforms (Kubernetes, Docker Swarm, Cloud Run)

## Workflow 3: Preview Docker

Builds development preview with live content updates.

**Triggers:** Push to `develop`/`main`, manual dispatch

**Output:** `leadcms/nextjs-cto-portfolio-preview` Docker image

**Use for:** Preview/staging environments with live LeadCMS sync

## Required Secrets

Configure in repository Settings → Secrets:

- `LEADCMS_URL` - Your LeadCMS instance URL (required)
- `DOCKERHUB_USERNAME` - Docker Hub username (for Docker workflows)
- `DOCKERHUB_TOKEN` - Docker Hub access token (for Docker workflows)

## Usage Examples

**Download static artifact:**
1. Go to Actions tab → select workflow run
2. Download `nextjs-cto-portfolio-static-{branch}.zip` from Artifacts section

**Run static Docker container:**
```bash
docker run -p 80:80 -e NEXT_PUBLIC_LEADCMS_URL=https://your-cms.leadcms.ai leadcms/nextjs-cto-portfolio-static:main
```

**Run preview Docker container:**
```bash
docker run -p 80:80 -e LEADCMS_URL=https://your-cms.leadcms.ai -e LEADCMS_API_KEY=your-key leadcms/nextjs-cto-portfolio-preview:develop
```

## Support

- [LeadCMS Documentation](https://leadcms.ai/docs)
- Open an issue in this repository

---
**Last Updated:** November 2025
