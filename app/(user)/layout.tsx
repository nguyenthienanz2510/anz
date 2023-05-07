import Banner from '@/components/Blog/Banner'
import Header from '@/components/Blog/Header'
import './../globals.css'
import Provider from './Provider'
import { Metadata } from 'next'

export const metadata: Metadata = {
  openGraph: {
    title: `Nguyen Thien An's Daily Blog`,
    description: `Hi there, i am a developer with an endless supply of energy for coding.`,
    images: 'https://cdn.sanity.io/images/gm83a3pq/production/07ea92552cf8d558222ef9ee3f271db1a05f5970-1920x1080.jpg'
  },
  viewport: { width: 'device-width', initialScale: 1 },
  title: `Nguyen Thien An's Daily Blog`,
  description: `Hi there, i am a developer with an endless supply of energy for coding.`,
  keywords: [`Nguyen Thien An's Daily Blog`, `Nguyen Thien An`, `An's Blog`, `An's Daily Blog`],
  creator: 'Nguyen Thien An',
  verification: {
    google: '5oKIYQydNIEfF1lCj1Fhtp1eQIsR4oOImWEmuYgtoR4'
  }
}

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Provider>
          <Header />
          <Banner />
          {children}
        </Provider>
      </body>
    </html>
  )
}
