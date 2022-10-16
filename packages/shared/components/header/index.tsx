import { H4, View } from 'dripsy'
import React from 'react'
import { Button } from '../button'

export function Header() {
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
      <Button title="Log in" />
      <View sx={{ width: 8 }} />
      <Button title="Sign up" />
    </View>
  )
}
