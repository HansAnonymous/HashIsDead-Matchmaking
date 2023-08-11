// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-headlessui',
    '@nuxtjs/tailwindcss',
    'nuxt-plotly',
  ],
  headlessui: {
    prefix: ''
  },
  webpack: {
    loaders: {
      vue: {
        hotReload: true,
      }
    }
  },
  vite: {
    optimizeDeps: {
      include: ["plotly.js-dist-min"],
    }
  }
});