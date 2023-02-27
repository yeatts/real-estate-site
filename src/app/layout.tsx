import './globals.css'

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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
