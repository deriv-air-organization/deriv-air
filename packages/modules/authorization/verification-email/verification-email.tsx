import useWS from '@deriv-air/api/hooks/useWS'

import React, { useEffect, useState } from 'react'
import { Button } from '@deriv-air/components/button'
// import type { SolitoAppProps } from 'solito'

export function VerificationEmail() {
  const [email, setEmail] = useState('')
  const [emailSent, setEmailSent] = useState(false)
  const verificationEmail = useWS('verify_email')

  useEffect(() => {
    if (verificationEmail.data) setEmailSent(true)
  }, [verificationEmail.data])

  function sendEmail() {
    verificationEmail.send({
      verify_email: email,
      type: 'account_opening',
    })
  }

  return (
    <>
      {!emailSent ? (
        <div>
          email address:
          <input
            type="text"
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
          <br />
          <Button title="send email" onPress={sendEmail} />
        </div>
      ) : (
        <div>
          a verification code was sent to you email. please check your inbox{' '}
        </div>
      )}
    </>
  )
}
