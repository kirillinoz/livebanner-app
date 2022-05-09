<template>
  <div class="card rounded-none dmd:rounded-lg">
    <!-- Heading and running tag -->
    <div class="flex justify-between">
      <h3>Banner</h3>
      <div
        class="px-4 py-1 rounded-full border"
        :class="{ 'tag-highlight': running, 'border-gray-500': !running }"
      >
        <h4>{{ running ? '⦿ Running' : '⦾ Stopped' }}</h4>
      </div>
    </div>
    <!-- Preview -->
    <div class="mt-10">
      <Preview />
    </div>
    <!-- Controls -->
    <div v-if="!editMode" class="mt-5 flex justify-between">
      <button v-if="!running" class="button highlight mr-2" @click="start">Start</button>
      <button v-else class="button mr-2" @click="stop">Stop</button>
      <button class="button" @click="editMode = true">Edit</button>
    </div>
    <!-- Edit mode -->
    <div v-if="editMode" class="mt-5 flex justify-between">
      <button class="button highlight mr-2" @click="save">Save changes</button>
      <button class="button" @click="cancel">Cancel</button>
    </div>
    <!-- Editor -->
    <BannerEditor v-if="editMode" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      editMode: false,
    }
  },
  computed: {
    running() {
      return this.$store.state.banner.running
    },
  },
  methods: {
    start() {
      this.$store.dispatch('banner/startBanner')
    },
    stop() {
      this.$store.dispatch('banner/stopBanner')
    },
    save() {
      this.editMode = false

      // Save banner
      this.$store.dispatch('banner/setBanner')
    },
    cancel() {
      this.editMode = false

      // Reset banner
      this.$store.dispatch('banner/getBanner')
    },
  },
}
</script>
