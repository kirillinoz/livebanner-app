export const state = () => ({
  session: null,
  user: null,
})

export const mutations = {
  setSession(state, session) {
    state.session = session
  },
  setUser(state, user) {
    state.user = user
  },
}

export const actions = {
  async getUser({ state, commit }) {
    if (!state.session) return
    const { data, error } = await this.$supabase
      .from('users')
      .select('twitter_handle, membership')
      .eq('id', this.$supabase.auth.user().id)
      .single()

    if (error) {
      console.error(error)
      return
    }

    commit('setUser', data)
  },
}
