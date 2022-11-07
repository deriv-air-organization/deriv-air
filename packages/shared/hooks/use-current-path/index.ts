import { useNavigationState } from '@react-navigation/native'

export function useCurrentPath() {
  return useNavigationState(
    (state) => state?.routes[state?.routes.length - 1]?.path ?? '/'
  )
}
