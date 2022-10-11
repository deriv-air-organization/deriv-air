import { Provider as ComponentsProvider } from '@deriv-air/components/provider'
import React from 'react'
import { Navigation } from './Navigation'

export default function App() {
  return (
    <ComponentsProvider>
      <Navigation />
    </ComponentsProvider>
  )
}
