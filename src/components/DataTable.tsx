import { DataGrid, GridColDef, GridRowParams } from '@mui/x-data-grid'

interface DataTableProps {
  rows: Array<object>
  columns: GridColDef[]
  pageSize?: number
  rowHeight?: number
  onRowClick?: (params: GridRowParams) => void
}

const DataTable: React.FC<DataTableProps> = ({
  rows,
  columns,
  pageSize = 5,
  //   rowHeight = 52,
  onRowClick,
}) => {
  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { pageSize: pageSize, page: 0 },
          },
        }}
        // rowHeight={rowHeight}
        sortingOrder={['asc', 'desc']}
        onRowClick={onRowClick}
      />
    </div>
  )
}

export default DataTable
