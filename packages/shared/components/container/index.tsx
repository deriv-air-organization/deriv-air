import { SxProp, useSx, View } from 'dripsy'
import { MotiView, useDynamicAnimation } from 'moti/build'
import React from 'react'

type TProps = React.PropsWithChildren<{
  sxContainer?: SxProp
  sxChildren?: SxProp
}>

export function Container({ children, sxContainer, sxChildren }: TProps) {
  const sx = useSx()
  const animation = useDynamicAnimation(() => ({}))

  const onLayout = ({ nativeEvent }) => {
    animation.animateTo((current) => ({
      ...current,
      height: nativeEvent.layout.height,
      width: nativeEvent.layout.width,
    }))
  }

  return (
    <MotiView
      state={animation}
      transition={{ type: 'timing', duration: 150 }}
      style={sx({
        backgroundColor: '$border',
        borderRadius: 4,
        ...sxContainer,
      })}
    >
      <View
        onLayout={onLayout}
        sx={{ alignItems: 'flex-start', padding: '$2', ...sxChildren }}
      >
        {children}
      </View>
    </MotiView>
  )
}
