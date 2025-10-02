import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'

export const makeStore = () =>
  configureStore({
    reducer: { auth: authReducer },
    devTools: process.env.NODE_ENV !== 'production',
  })

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<ReturnType<typeof makeStore>['getState']>
export type AppDispatch = ReturnType<ReturnType<typeof makeStore>['dispatch']>
