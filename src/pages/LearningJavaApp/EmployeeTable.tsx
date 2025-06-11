import { useState } from 'react'
import Grid from '@mui/material/Grid2'
import { Button, IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { getAllEmployees } from '../../services/EmployeeServices'
import DataTable from '@components/DataTable'

function EmployeeTable() {
  const [rows, setRows] = useState([])

  const columns = [
    { field: 'firstName', headerName: 'First Name', width: 150 },
    { field: 'lastName', headerName: 'Last Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'phone', headerName: 'Phone', width: 150 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 120,
      sortable: false,
      renderCell: (params: { row: { id: string } }) => (
        <>
          <IconButton
            aria-label='edit'
            color='primary'
            onClick={() => alert(`Edit: ${params.row.id}`)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            aria-label='delete'
            color='error'
            onClick={() => alert(`Delete: ${params.row.id}`)}
          >
            <DeleteIcon />
          </IconButton>
        </>
      ),
    },
  ]

  const getEmployees = async () => {
    const res = await getAllEmployees()
    console.log(res)
    if (res.isSuccessful) {
      setRows(res.data)
    }
  }
  console.log('Rows', rows)

  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <Button onClick={getEmployees} variant='contained'>
          Get Employees
        </Button>
        <DataTable rows={rows} columns={columns} pageSize={5} />
      </Grid>
    </Grid>
  )
}

export default EmployeeTable
