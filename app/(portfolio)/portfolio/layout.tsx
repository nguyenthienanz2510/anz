import { Metadata } from 'next'
import './../../globals.css'

export const metadata: Metadata = {
  openGraph: {
    title: `Nguyen Thien An's Portfolio`,
    description: `Nguyen Thien An's Portfolio`,
    images: 'https://cdn.sanity.io/images/gm83a3pq/production/07ea92552cf8d558222ef9ee3f271db1a05f5970-1920x1080.jpg'
  },
  title: `Nguyen Thien An's Portfolio`,
  description: `Nguyen Thien An's Portfolio`,
  keywords: `Nguyen Thien An's Portfolio`,
  creator: 'Nguyen Thien An'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
