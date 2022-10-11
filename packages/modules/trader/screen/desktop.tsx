import { H3, View } from 'dripsy'
import React from 'react'

export function Desktop() {
  const Placeholder = ({ color, name, ...props }) => {
    return (
      <View
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: color,
          ...props,
        }}
      >
        <H3>{name}</H3>
      </View>
    )
  }

  return (
    <View sx={{ flex: 1 }}>
      <Placeholder color={'skyblue'} name={'Header'} />
      <View sx={{ flex: 1, flexDirection: 'row' }}>
        <Placeholder color={'yellow'} name={'Chart'} flex={2} />
        <Placeholder color={'lime'} name={'Options'} width={250} flex={1} />
      </View>
    </View>
  )
}
