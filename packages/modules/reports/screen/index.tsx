import { Page } from '@deriv-air/components/page'
import { Responsive } from '@deriv-air/components/responsive'
import React from 'react'
import { Desktop } from './desktop'
import { Mobile } from './mobile'

export function ReportsScreen() {
  return (
    <Page>
      <Responsive mobile={<Mobile />} desktop={<Desktop />} />
    </Page>
  )
}
