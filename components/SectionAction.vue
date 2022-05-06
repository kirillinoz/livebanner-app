<template>
  <section class="mt-32">
    <h2 class="text-4xl text-gray-500 font-bold">What are you waiting for?</h2>
    <button v-if="session" class="button highlight mt-10 px-16 py-6 text-lg" @click="goToDashboard">
      Dashboard
    </button>
    <button v-else class="button highlight mt-10 px-16 py-6 text-lg" @click="signIn">
      Get started
    </button>
  </section>
</template>

<script>
import { getAuth, TwitterAuthProvider, signInWithRedirect } from 'firebase/auth'

export default {
  methods: {
    signIn() {
      const provider = new TwitterAuthProvider()
      const auth = getAuth()
      signInWithRedirect(auth, provider)
    },
    goToDashboard() {
      this.$router.push('/dashboard')
    },
  },
  computed: {
    session() {
      return this.$store.state.auth.session
    },
  },
}
</script>
