import { State, Action } from "../types"


export const initialState : State = {
    isDarkMode : false
}

const blogReducer = (state : State, action : Action) =>{
    switch (action.type) {
    case 'TOGGLE_MODE':
        console.log('toggle');
        
        return { ...state };
    default:
        throw new Error(`Unhandled action type: ${action.type}`);
}}

export default blogReducer