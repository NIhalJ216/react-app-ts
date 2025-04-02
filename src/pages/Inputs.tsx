import { useState } from 'react'
import Grid from '@mui/material/Grid2'
import { Typography } from '@mui/material'
import { Textfield, Dropdown } from '@components/Renderer'

function Inputs() {
  const [payload, setPayload] = useState({
    firstName: '',
    lastName: '',
    gender: '',
  })

  const GENDER = [
    { id: 'MALE', name: 'MALE' },
    { id: 'FEMALE', name: 'FEMALE' },
    { id: 'OTHER', name: 'OTHER' },
  ]

  const updatePayload = (pairs) => setPayload((prev) => ({ ...prev, ...pairs }))

  const handleChange = (key, val) => {
    updatePayload({ [key]: val })
  }

  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <Typography variant='h4' textAlign='center'>
          Inputs
        </Typography>
      </Grid>
      <Grid size={12}>
        <Grid
          container
          spacing={2}
          p={2}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Textfield
            label='First Name'
            name='firstName'
            value={payload.firstName}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            columnSize={3}
          />
          <Textfield
            label='Last Name'
            name='lastName'
            value={payload.lastName}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            columnSize={3}
          />
        </Grid>
        <Grid size={12}>
          <Grid
            container
            spacing={2}
            p={2}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Dropdown
              name='gender'
              label='Gender'
              value={payload.gender}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              columnSize={6}
              options={GENDER}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Inputs
