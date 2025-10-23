import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'
import AdvancedNavbar from '@/components/AdvancedNavbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Marvel Digital Solutions - AI & Enterprise Intelligence',
  description: 'Leading provider of cognitive enterprise intelligence, autonomous process orchestration, and cutting-edge AI solutions for modern businesses.',
  keywords: 'AI, Enterprise Intelligence, RAG, Agentic AI, Knowledge Graphs, Autonomous Systems',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AdvancedNavbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}