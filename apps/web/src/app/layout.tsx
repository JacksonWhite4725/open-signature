import { Metadata } from 'next'
import { UserProvider } from '@/providers/UserProvider'
import { Toaster } from '@/components/ui/Toaster'
import { ProgressBar } from '@/components/ui/ProgressBar'
import 'nprogress/nprogress.css'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | E-Signature Platform',
    default: 'E-Signature Platform - Secure Document Signing',
  },
  description: 'Secure digital document signing platform for businesses',
  metadataBase: new URL('https://your-domain.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    siteName: 'E-Signature Platform',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">
        <UserProvider>
          <Toaster />
          <ProgressBar />
          <main className="min-h-full">
            {children}
          </main>
        </UserProvider>
      </body>
    </html>
  )
}