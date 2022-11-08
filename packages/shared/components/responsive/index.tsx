import { useIsMobile } from '@deriv-air/hooks/use-is-mobile'

type TProps = {
  mobile: JSX.Element
  desktop: JSX.Element
}

export function Responsive({ mobile, desktop }: TProps) {
  const isMobile = useIsMobile()

  return isMobile ? mobile : desktop
}
