import Banner from '@/components/Blog/Banner'
import Header from '@/components/Blog/Header'
import './../globals.css'
import Provider from './Provider'
import { Metadata } from 'next'

export const metadata: Metadata = {
  openGraph: {
    title: `Nguyen Thien An's Daily Blog`,
    description: `Nguyen Thien An's Daily Blog`,
    images: 'https://cdn.sanity.io/images/gm83a3pq/production/07ea92552cf8d558222ef9ee3f271db1a05f5970-1920x1080.jpg'
  },
  title: `Nguyen Thien An's Daily Blog`,
  description: `Nguyen Thien An's Daily Blog`,
  keywords: `Nguyen Thien An's Daily Blog`,
  creator: 'Nguyen Thien An'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <meta name='google-site-verification' content='5oKIYQydNIEfF1lCj1Fhtp1eQIsR4oOImWEmuYgtoR4' />
      </head>
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
