import './../globals.css'
import Provider from './Provider'

export const metadata = {
  title: "Nguyen Thien An's Portfolio",
  description: "Nguyen Thien An's Portfolio"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
