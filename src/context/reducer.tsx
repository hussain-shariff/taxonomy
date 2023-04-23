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
        console.log(action.payload.page);
        
        return {
            ...state,
            dashboardPage : action.payload.page
        };
    default:
        throw new Error(`Unhandled action type: ${action.type}`);
}}

export default blogReducer