import { useInterpret } from '@xstate/react'
import React, { createContext } from 'react'
import { InterpreterFrom } from 'xstate'
import { toggleMachine } from '../machines/toggle-machine'

type TProps = {
  children: React.ReactNode
}

export const StoresContext = createContext({
  toggleService: {} as InterpreterFrom<typeof toggleMachine>,
})

export function Provider({ children }: TProps) {
  const toggleService = useInterpret(toggleMachine)

  return (
    <StoresContext.Provider value={{ toggleService }}>
      {children}
    </StoresContext.Provider>
  )
}
