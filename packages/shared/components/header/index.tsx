import { H4, View } from 'dripsy'
import React from 'react'
import { Button } from '../button'
import { useRouter } from 'solito/router'

export function Header() {
  const { push, replace, back, parseNextPath } = useRouter()
  return (
    <View
      sx={({ colors }) => ({
        backgroundColor: colors.$background,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 16,
      })}
    >
      <H4>Deriv Air</H4>
      <View sx={{ flex: 1 }} />
      <Button onPress={()=> push('/login')} title="Log in" />
      <View sx={{ width: 8 }} />
      <Button onPress={()=> push('/signup')} title="Sign up" />
    </View>
  )
}
