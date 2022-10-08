import useWS from '@deriv-air/api/hooks/useWS'
import { H1, P, useSx, View } from 'dripsy'
import { Button } from 'react-native'
import { TextLink } from 'solito/link'

export function HomeScreen() {
  const sx = useSx()
  const WS = useWS('ping')

  return (
    <View
      sx={{ flex: 1, justifyContent: 'center', alignItems: 'center', p: 16 }}
    >
      <H1 sx={{ fontWeight: '800' }}>Deriv Air</H1>
      <View sx={{ height: 32 }} />
      <TextLink
        href="/user/123"
        textProps={{
          style: sx({ fontSize: 16, fontWeight: 'bold', color: 'blue' }),
        }}
      >
        Link
      </TextLink>
      <View sx={{ height: 32 }} />
      <Button onPress={() => WS.send()} title={'PING'} />
      <P>{WS.is_loading ? 'loading' : WS.data}</P>
    </View>
  )
}
