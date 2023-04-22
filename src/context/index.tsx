import React, {createContext, useContext, useReducer} from 'react'
import blogReducer, {initialState} from './reducer'

const blogContext = createContext(initialState)

type contextProviderProps = {
    children : React.ReactNode
}

export function contextProvider( {children} : contextProviderProps) {

    const [state, dispatch] = useReducer(blogReducer, initialState)

    const toggleMode = ()=>{
        dispatch({type : 'TOGGLE_MODE'})
    }


    const values = {
        state,
        toggleMode
    }

  return (
    <blogContext.Provider value={values}>
        {children}
    </blogContext.Provider>
  )
}

const appContext = useContext(blogContext)

export default appContext 