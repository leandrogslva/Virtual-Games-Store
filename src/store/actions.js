export const addUserLogged = ({ commit }, payload) => {
    commit('addUserLogged', payload)
}

export const resetUserLogged = ({ commit }, payload) => {
    commit('resetUserLogged', payload)
}

export const addAllUsersAccounts = ({ commit }, payload) => {
    commit('addAllUsersAccounts', payload) 
}
