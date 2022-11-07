import Router from 'next/router'
import { parseNextPath } from 'solito/router'

export function useCurrentPath() {
  return parseNextPath({ pathname: Router.pathname, query: Router.query })
}
