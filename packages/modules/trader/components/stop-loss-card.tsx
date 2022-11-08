import { Checkbox } from '@deriv-air/components/checkbox'
import { Container } from '@deriv-air/components/container'
import React from 'react'

export function StopLossCard() {
  return (
    <Container sxContainer={{ width: '100%' }}>
      <Checkbox label="Stop loss" />
    </Container>
  )
}
