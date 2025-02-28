export interface CounterState {
  value: number
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
}
