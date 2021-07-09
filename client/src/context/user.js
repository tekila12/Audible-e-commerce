import React from "react";
import { useHistory } from "react-router-dom"
const UserContext = React.createContext();

/*Saving authToken in the local storage so the user keeps being
logged in when the page is refreshed */

function getUserFromLocalStorage() {
    return localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : { username: null, token: null };
  }

function UserProvider({ children }) {
  const [success, setSuccees] = React.useState(false)
  const [user, setUser] = React.useState(getUserFromLocalStorage());
  const history = useHistory()

  /* Logout funcionality 
  
  So here I remove the previousUser, and I am setting token to null || 
  I am cleaning it from localStorage where it was kept. */
  
  const logoutHandler = React.useCallback(() => {
    localStorage.removeItem('user')
    setUser((previousUser) => ({ ...previousUser, token: null }))
    setSuccees(true)
    history.push('/')
  }, [history])

  
  /* Here useMemo is being used because everytime a Component uses any of these functions
  a new object is being created and I dont wan't that */
  
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
      
