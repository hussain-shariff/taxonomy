import { State, Action } from "../types"

export const initialState : State = {
    isDarkMode : false,
    dashboardPage : 'posts'
}

const blogReducer = (state : State, action : Action) =>{
    switch (action.type) {
    case 'TOGGLE_MODE':
        return {
            ...state,
            isDarkMode : !state.isDarkMode 
        };
    case 'SWITCH_PAGE':
        return {
            ...state,
            dashboardPage : action.payload
        };
    default:
        throw new Error(`Unhandled action type: ${action.type}`);
}}

export default blogReducer