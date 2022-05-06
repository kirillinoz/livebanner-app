<template>
  <div class="card">
    <!-- Heading and plan tag -->
    <div class="flex justify-between">
      <h3>Profile</h3>
      <div
        class="px-4 py-1 rounded-full border"
        :class="{ 'tag-highlight': pro, 'border-gray-500': !pro }"
      >
        <h4>{{ pro ? '★ Pro' : '☆ Basic' }}</h4>
      </div>
    </div>
    <div class="mt-10 flex justify-between">
      <!-- Profile image and name -->
      <div class="flex-1 flex mr-2">
        <img
          class="rounded-full h-12 w-12 mr-2"
          :src="
            twitter_handle
              ? `https://unavatar.io/twitter/${twitter_handle}`
              : `https://pbs.twimg.com/media/EvGZAcWXYAAPVLT.png`
          "
        />
        <h6 class="flex font-bold text-gray-500 tracking-tight justify-center items-center mr-8">
          @{{ twitter_handle ? twitter_handle : 'Loading...' }}
        </h6>
      </div>
      <!-- Upgrade to Pro -->
      <button disabled class="button highlight">Get Pro</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      console.log(this.$store.state.auth.user)
      return this.$store.state.auth.user
    },
    twitter_handle() {
      return this.user?.twitter_handle
    },
    pro() {
      return this.user?.membership === 'pro'
    },
  },
}
</script>
