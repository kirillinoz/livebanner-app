export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'LiveBanner • Dynamic Banners for Twitter',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Make your profile stand out on Twitter. Create unique dynamic banners using templates, colors and more.',
      },
      { name: 'format-detection', content: 'telephone=no' },
      //Open Graph Data
      { property: 'og:site_name', content: 'LiveBanner' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://livebanner.net',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'LiveBanner • Dynamic Banners for Twitter',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Make your profile stand out on Twitter. Create unique dynamic banners using templates, colors and more.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://i.imgur.com/aAnFh3U.png',
      },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { name: 'twitter:site', content: '@LiveBannerNET' },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://livebanner.net',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'LiveBanner • Dynamic Banners for Twitter',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Make your profile stand out on Twitter. Create unique dynamic banners using templates, colors and more.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://i.imgur.com/aAnFh3U.png',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/firebase.js', '~/plugins/supabase.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  googleFonts: {
    families: {
      Inter: [700],
      'Libre Franklin': [900],
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  env: {
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseAnonKey: process.env.SUPABASE_ANON_KEY,

    firebaseApiKey: process.env.FIREBASE_API_KEY,
  },
}
