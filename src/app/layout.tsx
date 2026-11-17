import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Cart } from '@/components/cart/Cart'
import { ThemeProvider } from '@/contexts/ThemeContext'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nando\'s India Redesign (Unofficial Concept)',
  description: 'An unofficial UI/UX concept redesign of the Nando\'s India website. Not affiliated with or endorsed by Nando\'s. Ordering is not available.',
  keywords: ['nandos', 'peri-peri chicken', 'grilled chicken', 'restaurant', 'food delivery', 'order online'],
  openGraph: {
    title: 'Nando\'s India Redesign (Unofficial Concept)',
    description: 'Unofficial concept redesign. Not affiliated with Nando\'s.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased bg-black text-white pb-10">
        <ThemeProvider>
          <>
            <Header />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            <Cart />
            <div
              role="note"
              className="fixed bottom-0 left-0 right-0 z-[60] bg-yellow-400 text-black text-center text-xs sm:text-sm font-semibold px-4 py-2 shadow-lg"
            >
              Unofficial concept redesign — not affiliated with or endorsed by Nando&apos;s. This is a demo: no orders can be placed.
            </div>
          </>
        </ThemeProvider>
      </body>
    </html>
  )
}
