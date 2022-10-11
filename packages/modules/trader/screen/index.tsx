import { Responsive } from '@deriv-air/components/responsive'
import React from 'react'
import { Desktop } from './desktop'
import { Mobile } from './mobile'

export function TraderScreen() {
  return <Responsive mobile={<Mobile />} desktop={<Desktop />} />
}
