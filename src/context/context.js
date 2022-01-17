import {createContext, useState, useEffect} from 'react';        //<-- importing create context
export const appContext = createContext();  //<-- exporting created appContext

export const Provider = ({children}) => {


  return (
    <appContext.Provider value={{
      data: {

      },
      actions: {
        
      }
    }}>
      {children}
    </appContext.Provider>
  )
}
