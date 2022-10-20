import DerivAPIBasic from '@deriv/deriv-api/dist/DerivAPIBasic.js'

let api: {
  send: (props: any) => Promise<any>
  subscribe: (props: any) => { subscribe: (onData: any, onError: any) => any }
}

export const useAPI = () => {
  if (api) return api

  const connection = new WebSocket(
    'wss://qa10.deriv.dev/websockets/v3?app_id=3322'
  )

  api = new DerivAPIBasic({ connection })

  return api
}
