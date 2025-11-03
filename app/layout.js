export const metadata = {
  title: 'बिल्ली की जादुई कहानी - Magical Cat Cartoon',
  description: 'A magical Hindi cartoon about cats with engaging animations',
}

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  )
}
