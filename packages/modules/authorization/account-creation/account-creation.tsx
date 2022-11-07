import useWS from '@deriv-air/api/hooks/useWS'
import { Button } from '@deriv-air/components/button'
import { Center } from '@deriv-air/components/center'
import { Page } from '@deriv-air/components/page'
import { H2, TextInput, useDripsyTheme, useSx } from 'dripsy'
import React, { useState } from 'react'
import { createParam } from 'solito'

const { useParam } = createParam()

export function AccountCreation() {
  const accountCreation = useWS('new_account_virtual')
  const [password, setPassword] = useState('')
  const [verificationCode] = useParam('code')
  const {
    theme: { colors },
  } = useDripsyTheme()
  const sx = useSx()

  if (accountCreation.data)
    return (
      <Page>
        <Center sx={{ flex: 1 }}>
          <H2>Your account is successfully created.</H2>
        </Center>
      </Page>
    )

  return (
    <Page>
      <Center sx={{ flex: 1 }}>
        <H2>Password</H2>
        <TextInput
          placeholder="********"
          placeholderTextColor={colors.$disabled}
          style={sx({
            borderColor: '$border',
            borderWidth: 2,
            borderRadius: 4,
            padding: '$2',
            outlineStyle: 'none',
            color: '$text',
            marginBottom: '$4',
          })}
          onChangeText={(value) => setPassword(value)}
        />
        <Button
          title="Send Email"
          onPress={() =>
            accountCreation.send({
              type: 'trading',
              client_password: password,
              residence: 'id',
              verification_code: verificationCode,
            })
          }
        />
      </Center>
    </Page>
  )
}
