import useWS from '@deriv-air/api/hooks/useWS'
import React, { useEffect, useState } from 'react'
import { Button } from '@deriv-air/components/button'
import { createParam } from 'solito'

const { useParam } = createParam()

export function AccountCreation() {
  const accountCreation = useWS('new_account_virtual')
  const [password, setPassword] = useState('')
  const [verificationCode] = useParam('code')
  const [AccountCreated, setAccountCreated] = useState(false)

  useEffect(() => {
    if (accountCreation.data) setAccountCreated(true)
  }, [accountCreation.data])

  function sendVerificationCode() {
    accountCreation.send({
      type: 'trading',
      client_password: password,
      residence: 'id',
      verification_code: verificationCode,
    })
  }

  return (
    <div>
      {!AccountCreated ? (
        <div>
          Password
          <input
            type="text"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
          <Button title="send email" onPress={sendVerificationCode} />
        </div>
      ) : (
        <div>your account is successfully created</div>
      )}
    </div>
  )
}
