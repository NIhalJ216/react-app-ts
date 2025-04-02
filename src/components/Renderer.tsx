import React from 'react'
import { MenuItem, TextField } from '@mui/material'
import Grid from '@mui/material/Grid2'

interface ReusableFieldProps {
  label: string
  value: string
  name: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  columnSize: number
  options?: Array<{ id: string; name: string }>
  error?: boolean
  helperText?: string
}

export const Textfield: React.FC<ReusableFieldProps> = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  columnSize,
  error,
  helperText,
}) => {
  return (
    <Grid size={columnSize}>
      <TextField
        name={name}
        label={label}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        variant='outlined'
        size='small'
        fullWidth
        error={error}
        helperText={helperText}
      />
    </Grid>
  )
}

export const Dropdown: React.FC<ReusableFieldProps> = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  columnSize,
  options = [],
  error,
  helperText,
}) => {
  return (
    <Grid size={columnSize}>
      <TextField
        name={name}
        label={label}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        select
        variant='outlined'
        size='small'
        fullWidth
        error={error}
        helperText={helperText}
      >
        {options.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.name}
          </MenuItem>
        ))}
      </TextField>
    </Grid>
  )
}
