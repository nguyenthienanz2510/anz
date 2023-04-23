'use client'

import React from 'react'
import { ThemeProvider } from 'next-themes'

type Props = {}

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <>{children}</>
    </ThemeProvider>
  )
}
