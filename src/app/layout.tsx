import { StrictMode } from 'react'
import './globals.scss'

export const metadata = {
  title: 'Quise Gives You The 🔑',
  description: 'Created by yours truely',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StrictMode>
      <html lang="en">
        <body>{children}</body>
      </html>
    </StrictMode>
  )
}
