import { makeTheme } from 'dripsy'

const darkColors = {
  $text: '#fff',
  $background: '#0e0e0e',
  $border: '#151717',
  $disabled: '#6e6e6e',
  $primary: '#ff444f',
  $failure: '#d33636',
  $success: '#3d9494',
}

const lightColors: typeof darkColors = {
  $text: '#000',
  $background: '#fff',
  $border: '#f2f3f4',
  $disabled: '#999999',
  $primary: '#ff444f',
  $failure: '#d33636',
  $success: '#3d9494',
}

export const darkTheme = makeTheme({
  // https://www.dripsy.xyz/usage/theming/create
  space: {
    // recommended: set 0 first, then double for consistent nested spacing
    $0: 0,
    $1: 4,
    $2: 8,
    $3: 16,
    $4: 32,
    $5: 64,
    $6: 128,
    $7: 256,
  },
  fontSizes: {
    $0: 12,
    $1: 14,
    $2: 16,
    $3: 18,
    $4: 24,
    $5: 28,
    $6: 32,
  },
  text: {
    h1: {
      fontSize: '$2', // 16px, from `fontSizes` above
    },
    h2: {
      color: '$text',
    },
    h3: {
      color: '$text',
    },
    h4: {
      color: '$text',
    },
    p: {
      fontSize: '$0', // 12px from `fontSizes`
      mb: '$3', // 16px from `space`
      color: '$text',
    },
  },
  colors: darkColors,
})

export const lightTheme = makeTheme({
  ...darkTheme,
  colors: lightColors,
})

type TTheme = typeof darkTheme

declare module 'dripsy' {
  interface DripsyCustomTheme extends TTheme {}
}
