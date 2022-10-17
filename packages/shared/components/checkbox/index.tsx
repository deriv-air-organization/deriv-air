// Todo: It's just a sample

import { H1, H2, Pressable } from 'dripsy'
import { MotiView } from 'moti'
import React, { useEffect, useState } from 'react'

type TProps = {
  onChange: (value: boolean) => void
}

export function Checkbox({ onChange }: TProps) {
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    onChange?.(isChecked)
  }, [isChecked, onChange])

  return (
    <Pressable onPress={() => setIsChecked((old) => !old)}>
      <MotiView
        from={{ opacity: 0 }}
        animate={{ opacity: 1, scale: isChecked ? 1 : 0.5 }}
        exit={{ opacity: 0 }}
      >
        <H2>Yes</H2>
      </MotiView>
      <H1 sx={{ color: 'red' }}>Do you agree?</H1>
    </Pressable>
  )
}
