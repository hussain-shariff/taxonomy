export type State = {
    isDarkMode : boolean,
    dashboardPage : string,
    currentUser : string
}

export type Action = {
    type : string,
    payload ?: {
        page ?: string
    }
}
