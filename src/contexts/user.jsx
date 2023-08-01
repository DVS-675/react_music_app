import React, { useContext } from "react"

export const UserContext = React.createContext({
  user: null,
  setCurrentUser: () => {},
})

export function useUserContext() {
  const user = useContext(UserContext)

  return user
}
