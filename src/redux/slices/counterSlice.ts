import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { CounterState } from '../types'

// Define initial state
const initialState: CounterState = {
  value: 0,
  status: 'idle',
}

// Async thunk for fetching data
export const fetchCounter = createAsyncThunk<number>('counter/fetch', async () => {
  const response = await fetch('https://api.example.com/counter')
  const data = await response.json()
  return data.value // Assuming API returns { value: number }
})

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    setCounter: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCounter.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchCounter.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.value = action.payload
      })
      .addCase(fetchCounter.rejected, (state) => {
        state.status = 'failed'
      })
  },
})

export const { increment, decrement, setCounter } = counterSlice.actions
export default counterSlice.reducer
