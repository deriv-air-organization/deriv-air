import { useCurrentPath } from '@deriv-air/hooks/use-current-path'
import { H4, View } from 'dripsy'
import React from 'react'
import { useRouter } from 'solito/router'
import { Button } from '../button'
import { Spacer } from '../spacer'

export function Header() {
  const { push, back } = useRouter()
  const { isHomepage, isReports } = useCurrentPath()

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
      {!isHomepage && <Spacer />}
      <H4>Deriv Air</H4>
      <Spacer />
      {!isReports && (
        <Button
          type="monochrome"
          onPress={() => push('/reports')}
          title="Reports"
        />
      )}
      <View sx={{ flex: 1 }} />
      <Button
        type="primary-light"
        onPress={() => push('/redirect/123')}
        title="Log in"
      />
      <Spacer />
      <Button onPress={() => push('/signup')} title="Sign up" />
    </View>
  )
}
