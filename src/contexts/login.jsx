import React, { useContext } from "react"

export const LoginContext = React.createContext({
  login: false,
  toggleLogin: () => {},
  toggleLogin: () => {},
})

export function useLoginContext() {
  const login = useContext(LoginContext)
  return login
}
