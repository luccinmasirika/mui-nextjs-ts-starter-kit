import { theme } from '@/utils/theme'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import type { NextPage } from 'next'
import { useDarkMode } from 'next-dark-mode'
import * as React from 'react'

interface IWrapper {}
interface IProps extends IWrapper {
  children: React.ReactElement[] | React.ReactElement
}

const Wrapper: NextPage<IProps> = ({ children }) => {
  const { darkModeActive } = useDarkMode()
  const mode = darkModeActive ? 'dark' : 'light'

  return (
    <ThemeProvider theme={theme(mode)}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default Wrapper
