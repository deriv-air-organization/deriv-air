import React from 'react'
import { Dripsy } from './dripsy'
import { NavigationProvider } from './navigation'

export function Provider({
  children,
  withNavigation = false,
}: {
  children: React.ReactNode
  withNavigation?: boolean
}) {
  if (!withNavigation) return <Dripsy>{children}</Dripsy>

  return (
    <NavigationProvider>
      <Dripsy>{children}</Dripsy>
    </NavigationProvider>
  )
}
