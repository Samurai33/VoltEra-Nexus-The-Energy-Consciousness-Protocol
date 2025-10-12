import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VoltEra Nexus - The Energy Consciousness Protocol',
  description: 'VoltEra Nexus - 13 NFTs que narram a gênese, a expansão e a sombra da rede energética descentralizada. Uma estética espiritual‑tecnológica para colecionadores de futuros.',
  keywords: ['NFT', 'Blockchain', 'Energia', 'Sustentabilidade', 'VoltEra', 'Consciência', 'OpenSea', 'Polygon'],
  authors: [{ name: 'VoltEra Technologies' }],
  creator: 'VoltEra Technologies',
  publisher: 'VoltEra Technologies',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://voltera-nexus.vercel.app'),
  openGraph: {
    title: 'VoltEra Nexus - The Energy Consciousness Protocol',
    description: '13 NFTs que narram a gênese, a expansão e a sombra da rede energética descentralizada VoltEra',
    url: 'https://voltera-nexus.vercel.app',
    siteName: 'VoltEra Nexus',
    images: [
      {
        url: '/voltera_logo.png',
        width: 800,
        height: 600,
        alt: 'VoltEra Nexus - The Energy Consciousness Protocol',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VoltEra Nexus - The Energy Consciousness Protocol',
    description: '13 NFTs que narram a gênese, a expansão e a sombra da rede energética descentralizada VoltEra',
    images: ['/voltera_logo.png'],
    creator: '@VolteraTech',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" href="/voltera_logo.png" />
        <link rel="apple-touch-icon" href="/voltera_logo.png" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}