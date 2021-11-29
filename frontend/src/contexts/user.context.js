import { createContext, useState, useEffect } from 'react';
import t from 'prop-types';

export const UserContext = createContext({});

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    function loadStorage() {
      const storageUser = localStorage.getItem("@RJSAuth:user");
      const storageToken = localStorage.getItem("@RJSAuth:token");

      if (storageUser && storageToken) {
        setUser(JSON.parse((storageUser)))
      }
    }

    loadStorage();
  }, []);

  async function signIn(data, callback) {
    const response = await data;

    setUser(response.user);

    localStorage.setItem("@RJSAuth:user", JSON.stringify(response.user));
    localStorage.setItem("@RJSAuth:token", response.token);

    callback();
  }

  function signOut(callback) {
    localStorage.clear();
    callback();
  }

  function signGuest(callback) {
    setUser(null);
    localStorage.clear()

    callback();
  }

  return (
    <UserContext.Provider value={{ signed: !!user, user, signIn, signOut, signGuest }}>
      {children}
    </UserContext.Provider>
  )
}

UserContextProvider.propTypes = {
  children: t.node.isRequired,
};
