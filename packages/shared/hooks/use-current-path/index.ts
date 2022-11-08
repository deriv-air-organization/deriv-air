import { useNavigationState } from '@react-navigation/native'

export function useCurrentPath() {
  const path = useNavigationState(
    (state) => state?.routes[state?.routes.length - 1]?.path ?? '/'
  )

  return {
    path,
    isHomepage: path === '/',
    isReports: path === '/reports',
  }
}
