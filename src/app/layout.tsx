import Header from "@/layout/Header"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        {children}
        <div>Shablau</div>
      </body>
    </html>
  )
}
