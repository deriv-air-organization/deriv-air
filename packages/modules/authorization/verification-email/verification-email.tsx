import useWS from '@deriv-air/api/hooks/useWS'
import { Button } from '@deriv-air/components/button'
import { Center } from '@deriv-air/components/center'
import { Page } from '@deriv-air/components/page'
import { H2, TextInput, useDripsyTheme, useSx } from 'dripsy'
import React, { useState } from 'react'

export function VerificationEmail() {
  const [email, setEmail] = useState('')
  const verifyEmail = useWS('verify_email')
  const {
    theme: { colors },
  } = useDripsyTheme()
  const sx = useSx()

  if (verifyEmail.data)
    return (
      <Page>
        <Center sx={{ flex: 1 }}>
          <H2>
            A verification code was sent to you email, Please check your inbox.
          </H2>
        </Center>
      </Page>
    )

  return (
    <Page>
      <Center sx={{ flex: 1 }}>
        <H2>Enter your email address</H2>
        <TextInput
          placeholder="name@example.com"
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
          onChangeText={(value) => setEmail(value)}
        />
        <Button
          title="Send Email"
          onPress={() =>
            verifyEmail.send({
              verify_email: email,
              type: 'account_opening',
            })
          }
        />
      </Center>
    </Page>
  )
}
