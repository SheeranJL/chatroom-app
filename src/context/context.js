import {createContext, useState, useEffect} from 'react';        //<-- importing create context
import {setOnlineUser} from '../firebase/firebase.js';
export const appContext = createContext();  //<-- exporting created appContext


export const Provider = ({children}) => {

  const [currentUser, setCurrentUser] = useState(null);

  //This effect will listen for changes in currentUser and will call the setOnlineUser function in our firebase file to set the logged in user as 'online'//
  useEffect(() => {
     setOnlineUser(currentUser)
  }, [currentUser])

  return (
    <appContext.Provider value={{
      data: {
        currentUser,
      },
      actions: {
        setCurrentUser,
      }
    }}>
      {children}
    </appContext.Provider>
  )
}
