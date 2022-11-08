import { useActor } from '@xstate/react'
import { useContext } from 'react'
import { StoresContext } from '../provider'

export const useToggleMachine = () => {
  const globalServices = useContext(StoresContext)

  return useActor(globalServices.toggleService)
}
