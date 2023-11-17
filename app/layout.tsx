import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/footer'
import { siteConfig } from '@/config/site'
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          <Footer />
          </ThemeProvider>
          <Analytics />
        </body>
      </html>
    </>
  )
}