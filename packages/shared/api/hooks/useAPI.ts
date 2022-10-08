import DerivAPIBasic from '@deriv/deriv-api/dist/DerivAPIBasic.js'

let api: {
  send: (props) => Promise<any>
  subscribe: (props) => { subscribe: (onData, onError) => any }
}

export const useAPI = () => {
  if (api) return api

  const connection = new WebSocket(
    'wss://ws.binaryws.com/websockets/v3?app_id=1089'
  )

  api = new DerivAPIBasic({ connection })

  return api
}
