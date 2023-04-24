export type State = {
    isDarkMode : boolean,
    dashboardPage : string
}

export type Action = {
    type : string,
    payload ?: {
        page ?: string
    }
}
