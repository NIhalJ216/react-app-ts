import { useState, useEffect } from 'react'
import axios from 'axios'

function About() {
  const [counter1, setCounter1] = useState<number>(0)

  const [tog, setTog] = useState<boolean>(false)

  const [payload, setPayload] = useState({
    todoItem: '',
  })
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [todoList, setTodoList] = useState([])

  const handleChange = (key, val) => {
    setPayload((prevPayload) => ({ ...prevPayload, [key]: val }))
  }

  const handleTodoItem = (action, ind) => {
    switch (action) {
      case 'Add':
        setTodoList((prevList) => [...prevList, { item: payload.todoItem, completed: false }])
        setPayload({ todoItem: '' })
        break

      case 'Toggle':
        setTodoList((prevList) =>
          prevList.map((itm, i) => (i === ind ? { ...itm, completed: !itm.completed } : itm)),
        )
        break

      case 'Remove':
        setTodoList((prevList) => prevList.filter((_, i) => i !== ind))
        break

      default:
        break
    }
  }

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setData(response.data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <div>
      <div id='qn1'>
        <h1 style={{ textAlign: 'center' }}>About</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <button onClick={() => setCounter1(counter1 + 1)}>Increament</button>
          <p>Count is {counter1}</p>
          <button onClick={() => setCounter1(counter1 - 1)}>Decrement</button>
        </div>
      </div>

      <div
        id='qn2'
        style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '1rem' }}
      >
        <p> Toggle: {tog ? 'ON' : 'OFF'}</p>
        <button onClick={() => setTog(!tog)}>Switch</button>
      </div>

      <div id='qn3'>
        <h1 style={{ textAlign: 'center' }}>To do list</h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <input
            name='todoItem'
            value={payload.todoItem}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
          <button onClick={() => handleTodoItem('Add', 0)}>Add</button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ul>
            {todoList.map((itm, ind) => (
              <div key={ind} style={{ display: 'flex', justifyContent: 'center' }}>
                <li key={ind} style={{ textDecoration: itm.completed ? 'line-through' : 'none' }}>
                  {itm.item}
                </li>
                <button onClick={() => handleTodoItem('Toggle', ind)}>Toggle</button>
                <button onClick={() => handleTodoItem('Remove', ind)}>Remove</button>
              </div>
            ))}
          </ul>
        </div>
      </div>

      <div id='qn4'>
        <h1 style={{ textAlign: 'center' }}>Fetch from API</h1>
        {loading && <p style={{ textAlign: 'center' }}>Loading...</p>}
        {error && <p style={{ textAlign: 'center' }}>Error: {error}</p>}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ul style={{ textAlign: 'left' }}>
            {data.slice(0, 5).map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
