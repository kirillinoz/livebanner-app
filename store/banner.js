export const state = () => ({
  running: false,
  template: 'flood',
  foregroundColor: '#262261',
  backgroundColor: '#a9a7d8',
  caption: '',
  followerRange: 10,
  lastUpdate: null,
})

export const mutations = {
  setRunning(state, running) {
    state.running = running
  },
  setTemplate(state, template) {
    state.template = template
  },
  setForegroundColor(state, foregroundColor) {
    state.foregroundColor = foregroundColor
  },
  setBackgroundColor(state, backgroundColor) {
    state.backgroundColor = backgroundColor
  },
  setCaption(state, caption) {
    state.caption = caption
  },
  setFollowerRange(state, num) {
    state.followerRange = num
  },
  setLastUpdate(state, lastUpdate) {
    state.lastUpdate = lastUpdate
  },
}

export const actions = {
  async getBanner({ commit }) {
    //Get data from the database
    const { data, error } = await this.$supabase
      .from('banners')
      .select('*')
      .eq('id', this.$supabase.auth.user().id)
      .single()

    //If there is an error, log it and return
    if (error) {
      console.error(error)
      return
    }

    //Set the banner data to the state
    commit('setRunning', data.running)
    commit('setTemplate', data.template)
    commit('setForegroundColor', data.foreground_color)
    commit('setBackgroundColor', data.background_color)
    commit('setFollowerRange', data.follower_range)
    commit('setLastUpdate', data.last_update)
  },
  async setBanner({ state, dispatch }) {
    //Update the database with the new data
    const { error } = await this.$supabase
      .from('banners')
      .update({
        force_run: state.running ? true : false,
        template: state.template,
        foreground_color: state.foregroundColor,
        background_color: state.backgroundColor,
        follower_range: state.followerRange,
      })
      .eq('id', this.$supabase.auth.user().id)

    //If there is an error, log it
    if (error) {
      console.error(error)
    }

    //Update the state with the new data
    dispatch('getBanner')
  },
  async startBanner({ dispatch }) {
    //Update the database with the new data
    const { error } = await this.$supabase
      .from('banners')
      .update({
        running: true,
        force_run: true,
      })
      .eq('id', this.$supabase.auth.user().id)

    //If there is an error, log it
    if (error) {
      console.error(error)
    }

    //Update the state with the new data
    dispatch('getBanner')
  },
  async stopBanner({ dispatch }) {
    //Update the database with the new data
    const { error } = await this.$supabase
      .from('banners')
      .update({
        running: false,
        force_run: false,
      })
      .eq('id', this.$supabase.auth.user().id)

    //If there is an error, log it
    if (error) {
      console.error(error)
    }

    //Update the state with the new data
    dispatch('getBanner')
  },
}
