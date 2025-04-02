import { useFormik } from 'formik'
import * as Yup from 'yup'
import Grid from '@mui/material/Grid2'
import { Button, Typography, useTheme } from '@mui/material'
import { Textfield, Dropdown } from '@components/Renderer'

function Inputs() {
  const theme = useTheme()
  const GENDER = [
    { id: 'MALE', name: 'MALE' },
    { id: 'FEMALE', name: 'FEMALE' },
    { id: 'OTHER', name: 'OTHER' },
  ]

  // Yup validation schema
  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    gender: Yup.string().required('Gender is required'),
  })

  // Formik initialization
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      gender: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Form Submitted:', values)
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Typography variant='h4'>Form Validations</Typography>
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
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.firstName && Boolean(formik.errors.firstName)}
              helperText={formik.touched.firstName ? formik.errors.firstName : undefined}
              columnSize={3}
            />
            <Textfield
              label='Last Name'
              name='lastName'
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName ? formik.errors.lastName : undefined}
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
                value={formik.values.gender}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.gender && Boolean(formik.errors.gender)}
                helperText={formik.touched.gender ? formik.errors.gender : undefined}
                columnSize={6}
                options={GENDER}
              />
            </Grid>
          </Grid>

          <Grid container justifyContent='center' p={2}>
            <Button
              type='submit'
              variant='contained'
              sx={{ backgroundColor: theme.palette.customAccent.main }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  )
}

export default Inputs
