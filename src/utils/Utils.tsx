import { ReactNode } from 'react'
import { Typography } from '@mui/material'

export default function CodeTypography({ children }: { children: ReactNode }) {
  return (
    <Typography sx={{ fontFamily: 'Fira Code, monospace', fontSize: '1.5rem' }}>
      {children}
    </Typography>
  )
}
