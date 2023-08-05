import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portafolio | Danny Joel Bucay Shucad',
  description: 'Portafolio creado con rectjs',
  authors: [{ name: 'Danny Joel Bucay Shucad' }]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" type="image/x-icon" href="./favico.icon"></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
