import { NativeNavigation } from '@deriv-air/example/navigation/native'
import { Provider } from '@deriv-air/example/provider'
import React from 'react'

export default function App() {
  return (
    <Provider withNavigation>
      <NativeNavigation />
    </Provider>
  )
}
