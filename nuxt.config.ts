// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['nuxt-laravel-echo'],

  echo: {
    key: '',
    broadcaster: 'reverb', // available: reverb, pusher
    host: '',
    port: ,
    scheme: '', // available: http, https
    transports: ['ws', 'wss'],
    authentication: {
      mode: 'cookie',
      baseUrl: 'http://localhost:80',
      authEndpoint: '/broadcasting/auth',
      csrfEndpoint: '/sanctum/csrf-cookie',
      csrfCookie: 'XSRF-TOKEN',
      csrfHeader: 'X-XSRF-TOKEN',
    },
    logLevel: 3,
    properties: undefined,
  },

  vite: {
    optimizeDeps: {
      include: ['pusher-js'],
    },
  },
})
