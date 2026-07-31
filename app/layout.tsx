import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MemeAcademy | Free Memecoin Education',
  description: 'Learn cryptocurrency fundamentals, wallet security, and scam prevention.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  )
}