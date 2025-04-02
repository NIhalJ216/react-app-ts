import React from 'react'
import { Stack, Button, FormGroup, FormControlLabel, useTheme } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { toggleTheme } from '../redux/slices/themeSlice'
import { RootState } from '../redux/store'
import MaterialUISwitch from '../components/MuiSwitch'

const Dashboard: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const themeMode = useAppSelector((state: RootState) => state.theme.mode)
  const theme = useTheme()

  const buttons = [
    { label: 'Home', url: '/' },
    { label: 'About', url: '/about' },
    { label: 'Inputs', url: '/inputs' },
    { label: 'Skills', url: '/skills' },
  ]

  return (
    <Stack
      direction='row'
      justifyContent='center'
      alignItems='center'
      spacing={2}
      sx={{ padding: 2 }}
    >
      {buttons.map((button, index) => (
        <Button
          key={index}
          variant='text'
          onClick={() => navigate(button.url)}
          sx={{ color: theme.palette.primary.main }}
        >
          {button.label}
        </Button>
      ))}
      <FormGroup>
        <FormControlLabel
          control={
            <MaterialUISwitch
              checked={themeMode === 'dark'}
              onChange={() => dispatch(toggleTheme())}
            />
          }
          label={`Change To ${themeMode === 'dark' ? 'Light' : 'Dark'}`}
        />
      </FormGroup>
    </Stack>
  )
}

export default Dashboard
