import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SafeWater - Monitoreo Inteligente del Agua',
  description: 'SafeWater, prevención de Legionella y monitoreo de calidad de agua.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen">
        <Navbar />
          <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
