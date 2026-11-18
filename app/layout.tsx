import type { Metadata } from 'next'
import { Inter, Schibsted_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: '--font-schibsted'
});

export const metadata: Metadata = {
  title: 'Sara Maciel | Product Manager — B2B SaaS, Platforms & AI',
  description: 'Product Manager who builds B2B SaaS products that make operations simpler and more efficient: automation, integrations and AI agents in production.',
  openGraph: {
    title: 'Sara Maciel — Product Manager',
    description: 'B2B SaaS, 0→1 products, platforms and AI agents in production.',
    images: ['/sara.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${schibsted.variable} font-sans antialiased bg-paper text-ink`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
