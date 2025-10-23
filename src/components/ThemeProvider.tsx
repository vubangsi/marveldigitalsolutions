'use client'

import React from 'react'
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import { createTheme } from '@mui/material/styles'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6366f1',
    },
    secondary: {
      main: '#06b6d4',
    },
    background: {
      default: '#0a0a0a',
      paper: '#1a1a1a',
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.875rem',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          textTransform: 'none',
          fontSize: '1rem',
          fontWeight: 600,
          padding: '12px 32px',
        },
      },
    },
  },
})

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <MUIThemeProvider theme={theme}>
      {children}
    </MUIThemeProvider>
  )
}