import { Provider as ComponentsProvider } from '@deriv-air/components/provider'
import { Provider as StoresProvider } from '@deriv-air/stores/provider'
import React from 'react'
import { Navigation } from './Navigation'

export default function App() {
  return (
    <StoresProvider>
      <ComponentsProvider>
        <Navigation />
      </ComponentsProvider>
    </StoresProvider>
  )
}
