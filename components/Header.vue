<template>
  <header class="bg-white">
    <div class="mx-auto max-w-3xl flex items-center justify-between px-3 py-4">
      <div>
        <nuxt-link class="flex items-center" to="/">
          <img class="h-12" src="../static/livebanner.svg" alt="LiveBanner" />
          <h3 class="px-2 font-bold text-primary">LiveBanner</h3>
        </nuxt-link>
      </div>
      <div class="flex items-center">
        <slot />
      </div>
    </div>
  </header>
</template>
