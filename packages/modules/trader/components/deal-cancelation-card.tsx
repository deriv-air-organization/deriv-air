import { Checkbox } from '@deriv-air/components/checkbox'
import { Container } from '@deriv-air/components/container'
import React from 'react'

export function DealCancelationCard() {
  return (
    <Container sxContainer={{ width: '100%' }}>
      <Checkbox label="Deal cancelation" />
    </Container>
  )
}
