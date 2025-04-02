import Grid from '@mui/material/Grid2'
import { Typography } from '@mui/material'

function Javascript() {
  return (
    <Grid container spacing={2}>
      <Typography variant='h4' gutterBottom>
        Javascript
      </Typography>
      <Grid size={12}>
        <Typography variant='body1'>JavaScript is the programming language of the web.</Typography>
        <Typography variant='body1'>It can update and change both HTML and CSS.</Typography>
        <Typography variant='body1'>It can calculate, manipulate and validate data.</Typography>
        <Typography variant='body1'>It Can Change HTML Content.</Typography>
        <Typography variant='body1'>It Can Change HTML Attribute Values.</Typography>
        <Typography variant='body1'>It Can Change HTML Styles (CSS).</Typography>
        <Typography variant='body1'>It Can Show/Hide HTML Elements.</Typography>
      </Grid>
    </Grid>
  )
}

export default Javascript
