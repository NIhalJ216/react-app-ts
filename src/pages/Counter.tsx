import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { increment, decrement, fetchCounter } from '../redux/slices/counterSlice'

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value)
  const status = useAppSelector((state) => state.counter.status)
  const dispatch = useAppDispatch()

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(fetchCounter())} disabled={status === 'loading'}>
        {status === 'loading' ? 'Loading...' : 'Fetch Counter'}
      </button>
    </div>
  )
}
