import { CssBaseline, ThemeProvider } from '@mui/material'
import { useAppSelector } from './redux/hooks'
import { RootState } from './redux/store'
import { lightTheme, darkTheme } from './styles/theme'
import Dashboard from '@pages/LearningJavaApp/Dashboard'
import Router from './routes'

function App() {
  const themeMode = useAppSelector((state: RootState) => state.theme.mode)
  return (
    <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
      <CssBaseline />
      <Dashboard />
      <Router />
    </ThemeProvider>
  )
}

export default App
