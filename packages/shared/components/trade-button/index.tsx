import { useIsMobile } from '@deriv-air/hooks/use-is-mobile'
import { Text, useSx, View } from 'dripsy'
import { MotiPressable } from 'moti/interactions'
import React from 'react'
import { Center } from '../center'
import { Spacer } from '../spacer'

type TProps = {
  title: string
  value: string
  onPress?: () => void
  disabled?: boolean
  type?: 'high' | 'low'
}

export function TradeButton({
  title,
  value,
  onPress,
  disabled,
  type = 'high',
}: TProps) {
  const sx = useSx()
  const isMobile = useIsMobile()

  return (
    <View sx={{ width: '100%', flex: 1 }}>
      <MotiPressable
        onPress={onPress}
        disabled={disabled}
        transition={{ type: 'timing', duration: 150 }}
        animate={({ hovered }) => {
          'worklet'

          return {
            translateY: hovered ? -3 : 0,
            opacity: disabled ? 0.32 : 1,
          }
        }}
        style={sx({
          paddingHorizontal: '$3',
          paddingVertical: 20,
          borderRadius: 4,
          backgroundColor: type === 'high' ? '$success' : '$failure',
        })}
      >
        <Center
          sx={{
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text sx={{ color: '#fff', fontWeight: 'bold' }}>{title}</Text>
          <Spacer />
          <Text sx={{ color: '#fff', fontWeight: 'bold' }}>{value}</Text>
        </Center>
      </MotiPressable>
    </View>
  )
}
