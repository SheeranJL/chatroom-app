import {createContext, useState, useEffect} from 'react';        //<-- importing create context
export const appContext = createContext();  //<-- exporting created appContext

export const Provider = ({children}) => {

  const [currentUser, setCurrentUser] = useState(null);

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
