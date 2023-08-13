import React, { useContext } from 'react';

export const TokenContext = React.createContext({
  token: null,
  setCurrentToken: () => {},
});

export function useTokenContext() {
  const token = useContext(TokenContext);

  return token;
}