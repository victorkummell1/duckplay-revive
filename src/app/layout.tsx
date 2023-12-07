import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/shared/Navbar'
import Footerbar from '../components/shared/Footerbar'
import Banner from '../components/shared/Banner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Duckplay ∙ Seja bem-vindo(a)',
  description: 'Marketplace de Jogos INDIES.',
  authors: {
    name: 'Victor Kummel',
    url: 'https://duckplay.vercel.app'
  },
  creator: 'Victor Kummel',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {/* <Banner /> */}
        <Navbar />
        {children}
        <Footerbar />
      </body>
    </html>
  )
}
