import { createContext, useState } from 'react';
import t from 'prop-types';

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const state = {
    user,
    setUser
  };

  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
}

UserContextProvider.propTypes = {
  children: t.node.isRequired,
};
