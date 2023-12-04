'use client'

import { createContext, useContext, useState } from 'react'
import { Inter } from 'next/font/google'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

import { Providers } from './redux/provider'
import { Header } from './components/Header/Header'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

interface IContextValueDefault {
  snackbarOpen: boolean
  snackbarMessage: string
  handleSnackbarClose: () => void
  handleOpenSnackbar: (message: string) => void
}

export const SnackbarContext = createContext<IContextValueDefault | undefined>(undefined)

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false)
  const [snackbarMessage, setSnackbarMessage] = useState<string>('')

  const handleSnackbarClose = () => {
    setSnackbarOpen(false)
  }

  const handleOpenSnackbar = (message: string) => {
    setSnackbarMessage(message)
    setSnackbarOpen(true)
  }

  const contextValue: IContextValueDefault = {
    snackbarOpen,
    snackbarMessage,
    handleSnackbarClose,
    handleOpenSnackbar
  }

  return (
    <Providers>
      <html lang="en">
        <SnackbarContext.Provider value={contextValue}>
          <body className={inter.className}>
            <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleSnackbarClose}>
              <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
                {snackbarMessage}
              </Alert>
            </Snackbar>
            <Header />
            {children}
          </body>
        </SnackbarContext.Provider>
      </html>
    </Providers>
  )
}

export const useSnackbar = () => {
  const context = useContext(SnackbarContext)
  if (!context) {
    throw new Error('useSnackbar must be used within a SnackbarProvider')
  }
  return context
}
