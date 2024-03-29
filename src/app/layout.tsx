import './globals.scss'
import { Poppins } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';

const inter = Poppins({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600']
})

export const metadata = {
  title: 'José Claercio',
  description: 'José Claercio is a software engineer...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Analytics />
      <SpeedInsights/>
    </html>
  )
}
