<template>
  <div>
    <Header>
      <button class="h-max button" @click="signOut">Sign out</button>
    </Header>
    <div class="mx-auto max-w-3xl">
      <ProfileCard class="mt-10" />
      <BannerCard class="mt-10" />
      <p class="text-center text-sm font-bold mt-2 text-gray-500">
        Note: the banner may take up to one minute to update.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async signOut() {
      const { error } = await this.$supabase.auth.signOut()
      if (error) console.error(error)
      this.$router.push('/')
    },
  },
  mounted() {
    this.$store.commit('auth/setSession', this.$supabase.auth.session())
    //if (this.$supabase.auth.session()) {
    this.$store.dispatch('auth/getUser')
    this.$store.dispatch('banner/getBanner')
    //} else {
    //  this.$router.push('/')
    //}
  },
}
</script>
