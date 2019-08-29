export const addUserLogged = ({ commit }, payload) => {
    commit('addUserLogged', payload)
}

export const resetUserLogged = ({ commit }, payload) => {
    commit('resetUserLogged', payload)
}

export const addAllUsersAccounts = ({ commit }, payload) => {
    commit('addAllUsersAccounts', payload) 
}

export const listGamesToPurchase = ({ commit }, payload) => {
    commit('listGamesToPurchase', payload)
}

export const cleanGamesToPurchase = ({ commit }, payload) => {
    commit('cleanGamesToPurchase', payload)
}