import RedirectScreen from '@deriv-air/authorization/account-creation'
import SignupScreen from '@deriv-air/authorization/verification-email'
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
  signup: undefined
  redirect: {
    code: string
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
              signup: 'signup',
              redirect: 'redirect/:code',
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
        <Stack.Screen
          name="signup"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="redirect"
          component={RedirectScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
