<template>
  <div class="mt-10">
    <!-- Template -->
    <div class="flex justify-between">
      <h5>Template</h5>
      <button disabled class="button p-0">Flood</button>
    </div>
    <!-- Colors -->
    <div class="mt-5 flex justify-between">
      <h5>Colors</h5>
      <div class="flex-1 flex">
        <input type="color" @change="setForegroundColor" :value="foregroundColor" class="mr-2" />
        <input type="color" @change="setBackgroundColor" :value="backgroundColor" />
      </div>
    </div>
    <!-- Caption -->
    <div class="mt-5 flex justify-between">
      <h5>Caption</h5>
      <input type="text" @input="setCaption" :value="caption" />
    </div>
    <!-- Range -->
    <div class="mt-5 flex justify-between">
      <h5>Range</h5>
      <div class="flex-1 flex flex-col justify-between sm:flex-row">
        <button
          class="button sm:mr-2"
          :class="{ highlight: followerRange === 10 }"
          @click="setFollowerRange(10)"
        >
          10
        </button>
        <button
          class="button mt-2 sm:mr-2 sm:mt-0"
          :class="{ highlight: followerRange === 100 }"
          @click="setFollowerRange(100)"
        >
          100
        </button>
        <button
          class="button mt-2 sm:mt-0"
          :class="{ highlight: followerRange === 1000 }"
          @click="setFollowerRange(1000)"
        >
          1000
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    setForegroundColor(e) {
      this.$store.commit('banner/setForegroundColor', e.target.value)
    },
    setBackgroundColor(e) {
      this.$store.commit('banner/setBackgroundColor', e.target.value)
    },
    setCaption(e) {
      this.$store.commit('banner/setCaption', e.target.value.toUpperCase())
    },
    setFollowerRange(followerRange) {
      this.$store.commit('banner/setFollowerRange', followerRange)
    },
  },
  computed: {
    foregroundColor() {
      return this.$store.state.banner.foregroundColor
    },
    backgroundColor() {
      return this.$store.state.banner.backgroundColor
    },
    caption() {
      return this.$store.state.banner.caption
    },
    followerRange() {
      return this.$store.state.banner.followerRange
    },
  },
}
</script>

<style></style>
