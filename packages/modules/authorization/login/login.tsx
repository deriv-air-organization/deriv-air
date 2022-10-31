// import useWS from '@deriv-air/api/hooks/useWS'
// import React, { useEffect, useState } from 'react'
import sha256 from 'crypto-js/sha256';

export function Login() {
  return (
    <div>login with hash string: {sha256("shayan")}</div>
  )
}
