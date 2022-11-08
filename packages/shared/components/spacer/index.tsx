import { View } from 'dripsy'
import React from 'react'

type TProps = {
  size?: 's' | 'm' | 'l'
}

export function Spacer({ size = 's' }: TProps) {
  let space = 8

  switch (size) {
    case 's':
      space = 8
      break
    case 'm':
      space = 16
      break
    case 'l':
      space = 32
      break
    default:
      space = 8
      break
  }

  return <View sx={{ height: space, width: space }} />
}
