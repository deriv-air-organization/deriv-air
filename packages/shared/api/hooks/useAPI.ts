import DerivAPIBasic from '@deriv/deriv-api/dist/DerivAPIBasic.js'

let api: {
  send: (props: any) => Promise<any>
  subscribe: (props: any) => { subscribe: (onData: any, onError: any) => any }
}

export const useAPI = () => {
  if (api) return api

  const connection = new WebSocket(
    'wss://ws.binaryws.com/websockets/v3?app_id=1089'
  )

  api = new DerivAPIBasic({ connection })

  return api
}
