import { createTheme } from '@mui/material/styles'

export const theme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      mode: mode,
      background: {
        default: mode === 'light' ? '#EDE7F6' : '#212121',
        paper: '#212121',
      },
      primary: {
        main: '#1A237E',
      },
      secondary: {
        main: '#F48FB1',
      },
      accent: {
        main: '#5B759F',
      },
    },
    typography: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
    },
  })

declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary']
  }
  interface PaletteOptions {
    accent?: PaletteOptions['primary']
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    accent: true
  }
}
