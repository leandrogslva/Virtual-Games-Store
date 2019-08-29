export const addUserLogged = (state, payload) => {
    state.userLogged = payload
}

export const resetUserLogged = (state, payload) => {
    state.userLogged = payload
}

export const addAllUsersAccounts = (state, payload) => {
    state.usersAccounts.push(payload)
}

export const setStatusLogged = (state, payload) => {
    state.logged = payload
}

export const resetStatusLogged = (state, payload) => {
    state.logged = payload
}