"use client"

import { Provider } from 'react-redux'
import { useEffect, useMemo } from 'react'
import { makeStore } from './index'
import { setCredentials } from './authSlice'
import { setAuthToken } from '@/lib/api'

export default function Providers({ children }: { children: React.ReactNode }) {
  const store = useMemo(() => makeStore(), [])

  useEffect(() => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
    if (token) {
      store.dispatch(setCredentials({ token }))
      setAuthToken(token)
    }
  }, [store])

  return <Provider store={store}>{children}</Provider>
}
