import React from 'react'
import { Stack, Button, FormGroup, FormControlLabel, useTheme } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { toggleTheme } from '../redux/slices/themeSlice'
import { RootState } from '../redux/store'
import MaterialUISwitch from '../components/MuiSwitch'

const Dashboard: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const themeMode = useAppSelector((state: RootState) => state.theme.mode);
  const theme = useTheme();
  console.log('Theme', theme.palette.primary.main)
  return (
    <Stack
      direction='row'
      justifyContent='center'
      alignItems='center'
      spacing={2}
      sx={{ padding: 2 }}
    >
      <Button
        variant='text'
        onClick={() => navigate('/')}
        sx={{ color: theme.palette.primary.main }}
      >
        Home
      </Button>
      <Button
        variant='text'
        onClick={() => navigate('/about')}
        sx={{ color: theme.palette.primary.main }}
      >
        About
      </Button>
      <FormGroup>
        <FormControlLabel control={<MaterialUISwitch checked={themeMode === "dark"}
          onChange={() => dispatch(toggleTheme())} />} label={`Change To ${themeMode === "dark" ? 'Light' : 'Dark'}`} />
      </FormGroup>
    </Stack>
  )
}

export default Dashboard
