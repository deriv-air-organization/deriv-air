import { useWindowDimensions } from 'react-native'

export function useIsMobile() {
  const { width } = useWindowDimensions()
  const isMobile = width <= 768

  return isMobile
}
