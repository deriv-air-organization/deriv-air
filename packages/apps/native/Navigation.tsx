import { ReportsScreen } from '@deriv-air/reports/screen'
import { TraderScreen } from '@deriv-air/trader/screen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useMemo } from 'react'

const Stack = createNativeStackNavigator<{
  trader: undefined
  reports: {
    id: string
  }
}>()

export function Navigation() {
  return (
    <NavigationContainer
      linking={useMemo(
        () => ({
          prefixes: ['/'],
          config: {
            initialRouteName: 'trader',
            screens: {
              trader: '',
              reports: 'reports/:id',
            },
          },
        }),
        []
      )}
    >
      <Stack.Navigator>
        <Stack.Screen
          name="trader"
          component={TraderScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="reports"
          component={ReportsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
