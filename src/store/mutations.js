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

export const listGamesToPurchase = (state , payload) => {
    state.gamesToPurchase.push(payload)
}

export const cleanGamesToPurchase = (state) => {
    state.gamesToPurchase = []
}

export const removeGameFromPurchaseList = (state, payload) => {
    state.gamesToPurchase.splice(payload,1)
}

export const updateVirtualPoints = (state, payload) => {
    state.userLogged.virtualPoints = payload
}