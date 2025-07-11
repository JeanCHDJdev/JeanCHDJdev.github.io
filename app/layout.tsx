import './globals.css';
import type { Metadata } from 'next'
import React from 'react'

import Navbar from './_tools/Navbar'
import Footer from './_tools/Footer'

export const metadata: Metadata = {
  title: 'Jean Choppin de Janvry',
  description: 'Personal research and project portfolio of Jean Choppin de Janvry. Interested in cosmology, video game development, and broad science topics.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      <body className="min-h-screen bg-space1 font-montserrat text-white">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
