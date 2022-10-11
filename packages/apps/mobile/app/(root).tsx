import { Provider as ComponentsProvider } from '@deriv-air/components/provider'
import { NativeStack } from 'expo-router'

export default function Root() {
  return (
    <ComponentsProvider>
      <NativeStack />
    </ComponentsProvider>
  )
}
