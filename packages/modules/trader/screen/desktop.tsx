import { Chart } from '@deriv-air/chart/chart'
import { Center } from '@deriv-air/components/center'
import { Divider } from '@deriv-air/components/divider'
import { View } from 'dripsy'
import React from 'react'
import { MultipliersOptionsCard } from '../components/multipliers-options-card'

export function Desktop() {
  return (
    <View sx={{ flex: 1, flexDirection: 'row' }}>
      <Center sx={{ flex: 2 }}>
        <Chart symbol={'1HZ200V'} />
      </Center>
      <Divider vertical />
      <View sx={{ maxWidth: 300, flex: 1, padding: '$3' }}>
        <MultipliersOptionsCard />
      </View>
    </View>
  )
}
