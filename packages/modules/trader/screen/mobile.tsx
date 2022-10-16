import { Chart } from '@deriv-air/chart/chart'
import { Center } from '@deriv-air/components/center'
import { Divider } from '@deriv-air/components/divider'
import { H3, View } from 'dripsy'
import React from 'react'

export function Mobile() {
  return (
    <View sx={{ flex: 1 }}>
      <Center sx={{ flex: 1 }}>
        <Chart symbol={'1HZ200V'} />
      </Center>
      <Divider />
      <Center sx={{ height: 250 }}>
        <H3>Options</H3>
      </Center>
    </View>
  )
}
