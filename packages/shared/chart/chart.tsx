import useSubscription from '@deriv-air/api/hooks/useSubscription'
import { TSocketRequestProps } from '@deriv-air/api/types'
import { ActivityIndicator, H2, P } from 'dripsy'
import React, { useEffect } from 'react'

type TProps = {
  symbol: TSocketRequestProps<'ticks'>['ticks']
}

export function Chart({ symbol }: TProps) {
  const { subscribe, unsubscribe, is_loading, data } = useSubscription('ticks')

  useEffect(() => {
    subscribe({ ticks: symbol })

    return () => unsubscribe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [symbol])

  if (is_loading && !data) return <ActivityIndicator />

  return (
    <>
      <H2>Chart</H2>
      <P>{JSON.stringify(data, undefined, 2)}</P>
    </>
  )
}
