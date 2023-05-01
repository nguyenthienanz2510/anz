import Banner from '@/components/Blog/Banner'
import Header from '@/components/Blog/Header'
import './../globals.css'
import Provider from './Provider'

export const metadata = {
  title: "Nguyen Thien An's Blog",
  description: "Nguyen Thien An's Blog"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
