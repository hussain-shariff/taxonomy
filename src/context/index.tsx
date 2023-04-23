import React, {createContext, useContext, useReducer} from 'react'
import blogReducer, {initialState} from './reducer'
import { State, Action } from '../types'

const BlogContext = createContext<{
    state: State;
    dispatch: React.Dispatch<Action>;
    }>({ state: initialState, dispatch: () => null });

type contextProviderProps = {
    children : React.ReactNode
}

export function ContextProvider( {children} : contextProviderProps) {

    const [state, dispatch] = useReducer(blogReducer, initialState)

    const values = {
        state,
        dispatch
    }

  return (
    <BlogContext.Provider value={values}>
        {children}
    </BlogContext.Provider>
  )
}

const useAppContext = () =>{
    return useContext(BlogContext)
  }

export default useAppContext 