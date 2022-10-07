import { Provider } from '@deriv-air/example/provider'
import { NativeStack } from 'expo-router'

export default function Root() {
  return (
    <Provider>
      <NativeStack />
    </Provider>
  )
}
