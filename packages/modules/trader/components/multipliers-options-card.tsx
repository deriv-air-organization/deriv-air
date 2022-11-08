import { Spacer } from '@deriv-air/components/spacer'
import React from 'react'
import { DealCancelationCard } from './deal-cancelation-card'
import { StopLossCard } from './stop-loss-card'
import { TakeProfitCard } from './take-profit-card'
import { TradeButtonsCard } from './trade-buttons-card'

export function MultipliersOptionsCard() {
  return (
    <>
      <TakeProfitCard />
      <Spacer />
      <StopLossCard />
      <Spacer />
      <DealCancelationCard />
      <Spacer />
      <TradeButtonsCard />
    </>
  )
}
