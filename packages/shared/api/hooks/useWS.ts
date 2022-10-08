import { useState } from 'react'
import {
  TSocketEndpointNames,
  TSocketRequestProps,
  TSocketResponseData,
} from '../types'
import { useAPI } from './useAPI'

const useWS = <T extends TSocketEndpointNames>(name: T) => {
  const [is_loading, setIsLoading] = useState(false)
  const [error, setError] = useState<unknown>()
  const [data, setData] = useState<TSocketResponseData<T>>()
  const api = useAPI()

  const send = async (
    ...props: TSocketRequestProps<T> extends never
      ? [undefined?]
      : [TSocketRequestProps<T>]
  ) => {
    if (is_loading) return

    setIsLoading(true)

    try {
      const response = await api.send({ [name]: 1, ...(props[0] || {}) })

      if (response.error) {
        setError(response.error)
      } else {
        setData(response[name])
      }
    } catch (e) {
      setError(e)
    } finally {
      setIsLoading(false)
    }
  }

  return { send, is_loading, error, data }
}

export default useWS
