<template>
  <div class="relative max-h-max overflow-hidden border">
    <!-- Foreground -->
    <img
      class="absolute top-1/2 z-20"
      :style="{ filter: hexToFilter(this.foregroundColor) }"
      src="~assets/templates/flood/foreground.png"
      alt="Foreground"
    />
    <!-- Background -->
    <img
      class="z-10"
      :style="{ filter: hexToFilter(this.backgroundColor) }"
      src="~assets/templates/flood/background.png"
      alt="Background"
    />
  </div>
</template>

<script>
import { hexToCSSFilter } from 'hex-to-css-filter'

export default {
  methods: {
    hexToFilter(hex) {
      const fil = hexToCSSFilter(hex).filter
      const filt = fil.replace(';', '')
      return filt
    },
  },
  computed: {
    foregroundColor() {
      return this.$store.state.banner.foregroundColor
    },
    backgroundColor() {
      return this.$store.state.banner.backgroundColor
    },
  },
}
</script>
