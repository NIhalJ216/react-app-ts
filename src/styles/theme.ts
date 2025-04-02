import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    customAccent: Palette['primary']
  }
  interface PaletteOptions {
    customAccent?: PaletteOptions['primary']
  }
}

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
    customAccent: { main: '#647af8' },
  },
})

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fff',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    customAccent: { main: '#9c27b0' },
  },
})
