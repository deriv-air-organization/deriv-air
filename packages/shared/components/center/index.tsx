import { SxProp, View } from 'dripsy'
import React from 'react'

type TProps = React.PropsWithChildren<{ sx?: SxProp }>

export function Center({ children, sx }: TProps) {
  return (
    <View
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        ...sx,
      }}
    >
      {children}
    </View>
  )
}
