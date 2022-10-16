import { View } from 'dripsy'
import React from 'react'

type TProps = {
  vertical?: boolean
}

export function Divider({ vertical = false }: TProps) {
  return (
    <View
      sx={({ colors }) => ({
        backgroundColor: colors.$border,
        height: vertical ? '100%' : 1,
        width: vertical ? 1 : '100%',
      })}
    />
  )
}
