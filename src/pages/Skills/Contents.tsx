import Grid from '@mui/material/Grid2'
import { Outlet } from 'react-router-dom'

function Contents() {
  return (
    <Grid container spacing={3} p={2}>
      <Grid size={12}>
        <Outlet />
      </Grid>
    </Grid>
  )
}

export default Contents
