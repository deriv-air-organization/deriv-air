import { Text, View } from 'dripsy'
import { MotiPressable } from 'moti/interactions'
import React, { useMemo } from 'react'

type TProps = {
  title: string
  onPress: () => void
}

export function Button({ title, onPress }: TProps) {
  return (
    <MotiPressable
      onPress={onPress}
      animate={useMemo(
        () =>
          ({ hovered, pressed }) => {
            'worklet'

            return {
              scale: pressed ? 0.95 : hovered ? 1.1 : 1,
            }
          },
        []
      )}
    >
      <View sx={{ p: 12, borderRadius: 4, backgroundColor: 'pink' }}>
        <Text>{title}</Text>
      </View>
    </MotiPressable>
  )
}
