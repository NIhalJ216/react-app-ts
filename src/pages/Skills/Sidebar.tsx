import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import { useLocation, useNavigate } from 'react-router-dom'

function Sidebar() {
  const navigate = useNavigate()
  const location = useLocation()

  const menu = [
    { id: 2, name: 'HTML', url: '/skills/html' },
    { id: 3, name: 'CSS', url: '/skills/css' },
    { id: 4, name: 'JavaScript', url: '/skills/js' },
    { id: 5, name: 'ES (ECMA Script)', url: '/skills/es' },
    { id: 6, name: 'Closures', url: '/skills/closures' },
    { id: 7, name: 'Form Validations', url: '/skills/form-validations' },
  ]

  return (
    <List>
      {menu.map((item) => (
        <ListItem
          key={item.id}
          disablePadding
          sx={{ backgroundColor: location.pathname === item.url ? '#ffffff14' : 'inherit' }}
        >
          <ListItemButton onClick={() => navigate(item.url)}>
            <ListItemIcon>
              {(item.name && <FiberManualRecordIcon fontSize='small' />) || null}
            </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}

export default Sidebar
