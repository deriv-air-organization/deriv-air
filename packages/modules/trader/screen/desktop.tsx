import { Chart } from '@deriv-air/chart/chart'
import { Center } from '@deriv-air/components/center'
import { Divider } from '@deriv-air/components/divider'
import { H3, View } from 'dripsy'
import React from 'react'

export function Desktop() {
  return (
    <View sx={{ flex: 1, flexDirection: 'row' }}>
      <Center sx={{ flex: 2 }}>
        <Chart symbol={'1HZ200V'} />
      </Center>
      <Divider vertical />
      <Center sx={{ maxWidth: 350, flex: 1 }}>
        <H3>Options</H3>
      </Center>
    </View>
  )
}
