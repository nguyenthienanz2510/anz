import { Metadata } from 'next'
import './../../globals.css'

export const metadata: Metadata = {
  openGraph: {
    title: `Nguyen Thien An's Portfolio`,
    description: `Hi there, i am a developer with an endless supply of energy for coding.`,
    images: 'https://cdn.sanity.io/images/gm83a3pq/production/07ea92552cf8d558222ef9ee3f271db1a05f5970-1920x1080.jpg'
  },
  viewport: { width: 'device-width', initialScale: 1 },
  title: `Nguyen Thien An's Portfolio`,
  description: `Hi there, i am a developer with an endless supply of energy for coding.`,
  keywords: [
    `Nguyen Thien An's Portfolio`,
    `Nguyen Thien An`,
    `Nguyen Thien An's Profile`,
    `An's Portfolio`,
    `An's Profile`
  ],
  creator: 'Nguyen Thien An',
  verification: {
    google: '5oKIYQydNIEfF1lCj1Fhtp1eQIsR4oOImWEmuYgtoR4'
  }
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      {/* <head>
        <meta name='google-site-verification' content='5oKIYQydNIEfF1lCj1Fhtp1eQIsR4oOImWEmuYgtoR4' />
      </head> */}
      <body>{children}</body>
    </html>
  )
}
