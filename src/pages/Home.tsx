import React from 'react'
import Counter from './Counter'

const Home: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to Our Website</h1>
      <p>This is the landing page of our awesome application.</p>
      <Counter />
    </div>
  )
}

export default Home
