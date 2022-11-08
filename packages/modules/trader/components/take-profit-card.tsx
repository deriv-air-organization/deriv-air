import { Checkbox } from '@deriv-air/components/checkbox'
import { Container } from '@deriv-air/components/container'
import { View } from 'dripsy'
import React, { useState } from 'react'

export function TakeProfitCard() {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <Container sxContainer={{ width: '100%' }}>
      <Checkbox label="Take profit" value={isChecked} onChange={setIsChecked} />
      {isChecked && <View sx={{ height: 50 }} />}
    </Container>
  )
}
