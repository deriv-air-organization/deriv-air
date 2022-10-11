import { useWindowDimensions } from 'react-native'

type TProps = {
  mobile: JSX.Element
  desktop: JSX.Element
}

export function Responsive({ mobile, desktop }: TProps) {
  const { width } = useWindowDimensions()
  const isMobile = width <= 768

  return isMobile ? mobile : desktop
}
