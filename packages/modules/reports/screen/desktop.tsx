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
      <Placeholder color={'yellow'} name={'History'} flex={1} />
    </View>
  )
}
