<template>
  <div>
    <Header>
      <nuxt-link class="h-max button highlight" to="/dashboard">Dashboard</nuxt-link>
      <!--<nuxt-link v-if="session" class="h-max button highlight" to="/dashboard">Dashboard</nuxt-link>-->
      <!--<button v-else class="button highlight" @click="signIn">Login</button>-->
    </Header>
    <div class="mx-auto max-w-3xl px-3">
      <SectionHero />
      <SectionAbout />
      <SectionFeatures />
      <SectionAction />
    </div>
  </div>
</template>

<script>
import { getAuth, TwitterAuthProvider, signInWithRedirect } from 'firebase/auth'
import { login } from '~/assets/scripts/login.js'

export default {
  methods: {
    signIn() {
      const provider = new TwitterAuthProvider()
      const auth = getAuth()
      signInWithRedirect(auth, provider)
    },
  },
  async mounted() {
    this.$store.commit('auth/setSession', this.$supabase.auth.session())
    this.$supabase.auth.onAuthStateChange((_, session) => {
      this.$store.commit('auth/setSession', session)
    })
    await login(this.$supabase)
  },
  computed: {
    session() {
      return this.$store.state.auth.session
    },
  },
}
</script>
