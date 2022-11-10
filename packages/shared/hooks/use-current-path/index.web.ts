import Router from 'next/router'
import { parseNextPath } from 'solito/router'

export function useCurrentPath() {
  const path = parseNextPath({ pathname: Router.pathname, query: Router.query })

  return {
    path,
    isHomepage: path === '/',
    isReports: path === '/reports',
  }
}
