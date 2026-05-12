import type { Metadata } from 'next'
import { Dancing_Script, Nunito } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dancingScript = Dancing_Script({ 
  subsets: ["latin"],
  variable: '--font-display',
  display: 'swap',
});

const nunito = Nunito({ 
  subsets: ["latin"],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AlMaje Floral | Flores Artesanales de Limpiapipas',
  description: 'Ramos y flores únicos hechos a mano con limpiapipas. Crea tu pedido personalizado y sorprende a alguien especial.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${dancingScript.variable} ${nunito.variable}`}>
      <body className="font-body antialiased paper-texture min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
