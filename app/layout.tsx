import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../front/app/tools/global_layout/Navbar'
import Footer from '../front/app/tools/global_layout/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pôle Espace CentraleSupélec',
  description: 'Le Pôle Espace de CentraleSupélec est une association étudiante qui a pour but de promouvoir l\'aérospatial au sein de l\'école. Nous réalisons des projets spatiaux, et organisons des évènements pour faire découvrir l\'aérospatial aux élèves de l\'école.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
