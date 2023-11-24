<template>
  <div class="relative max-h-max overflow-hidden border">
    <!-- Caption -->
    <p
      v-if="caption"
      :style="{
        'background-color': backgroundColor,
        color: foregroundColor,
        'border-color': foregroundColor,
      }"
      class="absolute top-1/2 left-1/2 z-30 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2 rounded-md font-franklin border-2"
    >
      {{ caption }}
    </p>
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
  data() {
    return {
      show: true,
    }
  },
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
    caption() {
      return this.$store.state.banner.caption
    },
  },
}
</script>
