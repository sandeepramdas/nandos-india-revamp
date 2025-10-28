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
  title: 'Nando\'s India - Legendary Flame-Grilled PERi-PERi Chicken',
  description: 'Experience the legendary taste of flame-grilled PERi-PERi chicken. Order online for delivery or pickup from Nando\'s India. Feed your fire!',
  keywords: ['nandos', 'peri-peri chicken', 'grilled chicken', 'restaurant', 'food delivery', 'order online'],
  openGraph: {
    title: 'Nando\'s India',
    description: 'Legendary Flame-Grilled PERi-PERi Chicken',
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
      <body className="font-sans antialiased bg-black text-white">
        <ThemeProvider>
          <>
            <Header />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            <Cart />
          </>
        </ThemeProvider>
      </body>
    </html>
  )
}
