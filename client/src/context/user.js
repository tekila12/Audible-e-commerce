import React from "react";
import { useHistory } from "react-router-dom"
const UserContext = React.createContext();

function getUserFromLocalStorage() {
    return localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : { username: null, token: null };
  }

function UserProvider({ children }) {
  const [success, setSuccees] = React.useState(false)
  const [user, setUser] = React.useState(getUserFromLocalStorage());
  const history = useHistory()

  const logoutHandler = React.useCallback(() => {
    localStorage.removeItem('user')
    setUser((previousUser) => ({ ...previousUser, token: null }))
    setSuccees(true)
    history.push('/')
  }, [history])

   const myUserContextValue =React.useMemo(()=>({
      user, setUser, logoutHandler, success, setSuccees
    }),[user, setUser, logoutHandler, success, ])
  return (

   
    <UserContext.Provider
      value={myUserContextValue}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
      