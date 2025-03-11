import type { Metadata } from 'next'
import '../styles/globals.css'
import ClickSpark from "@/components/animations/ClickSpark/ClickSpark";

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
      <ClickSpark>{children}
      </ClickSpark></body>
    </html>
  )
}
