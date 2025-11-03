import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { loadContentConfigStrict } from "@leadcms/sdk"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export function generateMetadata(): Metadata {
  const locale = process.env.LEADCMS_DEFAULT_LANGUAGE || process.env.NEXT_PUBLIC_LEADCMS_DEFAULT_LANGUAGE || "en"
  
  try {
    const metadata = loadContentConfigStrict("metadata", locale) as {
      siteTitle: string
      siteDescription: string
      language: string
      theme: string
    }
    
    return {
      title: metadata.siteTitle,
      description: metadata.siteDescription,
      generator: "LeadCMS",
    }
  } catch (error) {
    throw new Error(
      `Site metadata not found. Please ensure metadata.json exists in .leadcms/content/ ` +
      `or run 'npx leadcms pull' to sync content from LeadCMS.`
    )
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = process.env.LEADCMS_DEFAULT_LANGUAGE || process.env.NEXT_PUBLIC_LEADCMS_DEFAULT_LANGUAGE || "en"
  
  let metadata: {
    siteTitle: string
    siteDescription: string
    language: string
    theme: string
  }
  
  try {
    metadata = loadContentConfigStrict("metadata", locale) as typeof metadata
  } catch (error) {
    throw new Error(
      `Site metadata not found. Please ensure metadata.json exists in .leadcms/content/ ` +
      `or run 'npx leadcms pull' to sync content from LeadCMS.`
    )
  }
  
  return (
    <html lang={metadata.language} className={metadata.theme}>
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
