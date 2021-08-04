import { Auth0Provider } from '@auth0/auth0-react'
import React, { FC } from 'react'

export const AuthProvider: FC = ({children}) => {
  // @ts-ignore
  const domain = window.AUTH_DOMAIN
  // @ts-ignore
  const clientId = window.AUTH_CLIENT_ID
  // @ts-ignore
  const audience = window.AUTH_AUDIENCE

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      audience={audience}
      redirectUri={window.location.origin}
    >
      {children}
    </Auth0Provider>
  )
}