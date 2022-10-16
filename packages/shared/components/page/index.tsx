import { SafeAreaView, SxProp } from 'dripsy'
import React from 'react'
import { Divider } from '../divider'
import { Header } from '../header'

type TProps = React.PropsWithChildren<{ sx?: SxProp }>

export function Page({ children, sx }: TProps) {
  return (
    <SafeAreaView
      sx={({ colors }) => ({
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: colors.$background,
        ...sx,
      })}
    >
      <Header />
      <Divider />
      {children}
    </SafeAreaView>
  )
}
