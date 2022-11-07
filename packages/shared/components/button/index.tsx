import { Text, useSx, View } from 'dripsy'
import { MotiPressable } from 'moti/interactions'
import React from 'react'
import { Center } from '../center'

type TProps = {
  title: string
  onPress?: () => void
  fillWidth?: boolean
  disabled?: boolean
  type?: 'primary' | 'primary-light' | 'secondary' | 'tertiary' | 'monochrome'
}

export function Button({
  title,
  onPress,
  fillWidth,
  disabled,
  type = 'primary',
}: TProps) {
  const sx = useSx()

  let backgroundColor: string
  let color: string
  let hasBorder: boolean = false

  switch (type) {
    case 'primary-light':
      backgroundColor = 'transparent'
      color = '$primary'
      break
    case 'secondary':
      backgroundColor = 'transparent'
      color = '$text'
      hasBorder = true
      break
    case 'tertiary':
      backgroundColor = '#f2f3f4'
      color = '$primary'
      break
    case 'monochrome':
      backgroundColor = '$text'
      color = '$background'
      break
    case 'primary':
    default:
      backgroundColor = '$primary'
      color = '#fff'
      break
  }

  return (
    <View sx={{ width: fillWidth ? '100%' : null }}>
      <MotiPressable
        onPress={onPress}
        disabled={disabled}
        transition={{ type: 'timing', duration: 150 }}
        animate={({ hovered }) => {
          'worklet'

          return {
            opacity: hovered ? 0.75 : disabled ? 0.32 : 1,
          }
        }}
        style={sx({
          paddingVertical: 6,
          paddingHorizontal: 16,
          borderRadius: 4,
          borderColor: '$disabled',
          backgroundColor,
          borderWidth: hasBorder ? 1 : 0,
        })}
      >
        <Center>
          <Text sx={{ color, fontWeight: 'bold' }}>{title}</Text>
        </Center>
      </MotiPressable>
    </View>
  )
}
