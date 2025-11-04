// Declare window.__env for TypeScript
declare global {
  interface Window {
    __env?: Record<string, string>
  }
}

import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import { ThemeProvider } from "@/components/theme-provider"

import metadataJson from "@/.leadcms/content/metadata.json"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  ...metadataJson.siteMetadata,
  metadataBase: new URL(metadataJson.siteMetadata.baseUrl),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script src="/__env.js" strategy="beforeInteractive" />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
