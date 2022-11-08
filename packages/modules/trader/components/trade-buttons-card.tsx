import { Container } from '@deriv-air/components/container'
import { Spacer } from '@deriv-air/components/spacer'
import { TradeButton } from '@deriv-air/components/trade-button'
import { useIsMobile } from '@deriv-air/hooks/use-is-mobile'
import React from 'react'

export function TradeButtonsCard() {
  const isMobile = useIsMobile()

  return (
    <Container
      sxContainer={{ width: '100%' }}
      sxChildren={{ flexDirection: isMobile ? 'row' : 'column' }}
    >
      <TradeButton title="Up" value={'10.00 AUD'} type="high" />
      <Spacer size="m" />
      <TradeButton title="Down" value={'10.00 AUD'} type="low" />
    </Container>
  )
}
