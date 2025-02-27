import React from 'react'
import Button from '@components/Button'

const Home: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to Our Website</h1>
      <p>This is the landing page of our awesome application.</p>
      <Button onClick={() => alert('Button Clicked!')}>Get Started</Button>
    </div>
  )
}

export default Home
