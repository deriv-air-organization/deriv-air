import { useCurrentPath } from '@deriv-air/hooks/use-current-path'
import { H4, View } from 'dripsy'
import React from 'react'
import { useRouter } from 'solito/router'
import { Button } from '../button'

export function Header() {
  const { push, back } = useRouter()
  const path = useCurrentPath()
  const isHomepage = path === '/'

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
      {!isHomepage && <Button onPress={back} title="‹" />}
      {!isHomepage && <View sx={{ width: 8 }} />}
      <H4>Deriv Air</H4>
      <View sx={{ flex: 1 }} />
      <Button onPress={() => push('/login')} title="Log in" />
      <View sx={{ width: 8 }} />
      <Button onPress={() => push('/signup')} title="Sign up" />
    </View>
  )
}
