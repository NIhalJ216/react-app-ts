import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard: React.FC = () => {
  const navigate = useNavigate()

  return (
    <nav style={{ display: 'flex', justifyContent: 'center' }}>
      <ul style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
        <li style={{ marginRight: '20px', cursor: 'pointer' }} onClick={() => navigate('/')}>
          Home
        </li>
        <li style={{ cursor: 'pointer' }} onClick={() => navigate('/about')}>
          About
        </li>
      </ul>
    </nav>
  )
}

export default Dashboard
