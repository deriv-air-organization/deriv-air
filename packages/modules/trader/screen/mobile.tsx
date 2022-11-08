import { Chart } from '@deriv-air/chart/chart'
import { Center } from '@deriv-air/components/center'
import { Divider } from '@deriv-air/components/divider'
import { View } from 'dripsy'
import React from 'react'
import { MultipliersOptionsCard } from '../components/multipliers-options-card'

export function Mobile() {
  return (
    <View sx={{ flex: 1 }}>
      <Center sx={{ flex: 1 }}>
        <Chart symbol={'1HZ200V'} />
      </Center>
      <Divider />
      <View sx={{ padding: '$3' }}>
        <MultipliersOptionsCard />
      </View>
    </View>
  )
}
