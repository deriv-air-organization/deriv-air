import { Provider as ComponentsProvider } from '@deriv-air/components/provider'
import { Provider as StoresProvider } from '@deriv-air/stores/provider'
import { NativeStack } from 'expo-router'

export default function Root() {
  return (
    <StoresProvider>
      <ComponentsProvider>
        <NativeStack />
      </ComponentsProvider>
    </StoresProvider>
  )
}
