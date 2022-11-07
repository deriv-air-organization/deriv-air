import { Pressable, Text, useSx, View } from 'dripsy'
import { MotiView } from 'moti/build'
import React, { useEffect, useState } from 'react'
import { Center } from '../center'

type TProps = {
  label: string
  value?: boolean
  onChange?: (value: boolean) => void
  disabled?: boolean
}

export function Checkbox({ label, value, onChange, disabled }: TProps) {
  const [isChecked, setIsChecked] = useState(value || false)
  const sx = useSx()

  useEffect(() => {
    onChange?.(isChecked)
  }, [isChecked, onChange])

  return (
    <Pressable
      onPress={() => setIsChecked((old) => !old)}
      disabled={disabled}
      sx={{ opacity: disabled ? 0.32 : 1 }}
    >
      <Center sx={{ flexDirection: 'row', padding: 4 }}>
        <Center sx={{ height: 18, width: 18 }}>
          <View
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: 2,
              borderWidth: 2,
              borderColor: '$disabled',
            }}
          />
          <MotiView
            animate={{ opacity: isChecked ? 1 : 0 }}
            transition={{ type: 'timing', duration: 150 }}
            style={sx({ width: '100%', height: '100%', position: 'absolute' })}
          >
            <Center
              sx={{ flex: 1, borderRadius: 2, backgroundColor: '$primary' }}
            >
              <Text sx={{ color: '#fff', fontWeight: 'bold' }}>✓</Text>
            </Center>
          </MotiView>
        </Center>
        <Text sx={{ color: '$text', paddingLeft: 8 }}>{label}</Text>
      </Center>
    </Pressable>
  )
}
