import { Typography, useTheme } from '@mui/material'
import Grid from '@mui/material/Grid2'
import Sidebar from './Skills/Sidebar'
import Contents from './Skills/Contents'

function Skills() {
  const theme = useTheme()
  return (
    <Grid container spacing={2} sx={{ gap: 0 }}>
      <Grid size={12} textAlign='center' sx={{ backgroundColor: theme.palette.customAccent.main }}>
        <Typography variant='h4'>Skills</Typography>
      </Grid>
      <Grid size={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid size={1.5}>
          <Sidebar />
        </Grid>
        <Grid size={10.5}>
          <Contents />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Skills
