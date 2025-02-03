'use client'

import { createContext, useContext } from 'react'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'

interface UserContextData {
  session: Session | null
}

const UserContext = createContext<UserContextData>({ session: null })

export function UserProvider({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}