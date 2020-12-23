export const state = () => ({
    loginStatus: false
})

export const mutations = {
    setLoginStatus(state, value) {
      state.loginStatus = value
    }
}

export const getters = {
    getLoginStatus(state) {
      return state.loginStatus
    }
}