import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Providers from '@/store/Providers'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SpaceYouth - Kariyerini Hızla Yükselt',
  description: 'SpaceYouth ile kariyerini hızla yükselt. Birlikte öğrenmenin gücüyle kariyer yolculuğunu şekillendir.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={`${montserrat.variable} font-montserrat antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
