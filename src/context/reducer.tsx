import React from "react"

type stateProps = {
    isDarkMode : boolean
}

type actionProps = {
    type : string,
    payload : object
}

export const initialState : stateProps = {
    isDarkMode : false
}

const blogReducer = (state : stateProps, action : actionProps) =>{
    if(action.type === "TOGGLE_MODE"){
        return({
            ...state,
            isDarkMode : ! state.isDarkMode
        })
    }
}

export default blogReducer