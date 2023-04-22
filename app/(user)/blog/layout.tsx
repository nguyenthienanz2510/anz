export const metadata = {
  title: "Nguyen Thien An's Blog",
  description: "Nguyen Thien An's Blog"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
