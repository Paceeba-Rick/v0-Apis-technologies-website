import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: 'Nadir Technologies - Find Strength and Rise High | African Tech Company',
  description: 'Nadir Technologies is a leading software innovation company building transformative products and solutions across Africa. From campus commerce to enterprise SaaS, we drive digital transformation.',
  generator: 'v0.app',
  keywords: ['Nadir Technologies', 'Software Solutions', 'Digital Transformation', 'Africa Tech', 'Doyin App', 'Enterprise SaaS'],
  authors: [{ name: 'Nadir Technologies' }],
  creator: 'Nadir Technologies',
  icons: {
    icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nadir_logo-removebg-preview-epBDYMgwcqPEWq4sYip5TwoHg7U7Se.png',
    apple: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nadir_logo-removebg-preview-epBDYMgwcqPEWq4sYip5TwoHg7U7Se.png',
  },
  openGraph: {
    title: 'Nadir Technologies - Find Strength and Rise High',
    description: 'Leading African tech company building innovative software solutions for digital transformation.',
    type: 'website',
    locale: 'en_US',
    url: 'https://nadir.tech',
    siteName: 'Nadir Technologies',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
