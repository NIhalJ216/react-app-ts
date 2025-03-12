import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import themeReducer from './slices/themeSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

// TypeScript helpers for useSelector and useDispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
