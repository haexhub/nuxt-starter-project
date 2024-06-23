// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  auth: {
    baseURL: 'http://localhost:3001',

    provider: {
      type: 'authjs',
      /* endpoints: {
        signIn: { path: "/login", method: "post" },
        signOut: { path: "/logout", method: "post" },
        signUp: { path: "/register", method: "post" },
        getSession: { path: "/session", method: "get" },
      }, */
      //token: { signInResponseTokenPointer: "/token/accessToken" },
    },
    globalAppMiddleware: {
      isEnabled: true,
    },
  },

  devtools: { enabled: true },

  devServer: {
    port: 3001,
  },

  fileStorage: {
    mount: process.env.FILESTORAGE_MOUNT,
  },

  i18n: {
    strategy: 'prefix_and_default',
    defaultLocale: 'de',
    lazy: true,
    langDir: 'i18n',
    locales: [
      { code: 'de', file: 'de.ts' },
      { code: 'en', file: 'en.ts' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
  },

  modules: [
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@sidebase/nuxt-auth',
    '@vueuse/nuxt',
    'nuxt-file-storage',
    'nuxt-snackbar',
  ],

  pinia: {
    storesDirs: ['./stores/**'],
  },

  runtimeConfig: {
    auth: {
      secret: process.env.AUTH_SECRET ?? 'damn-secret-value!1elf',
    },

    database: {
      username: process.env.DB_USER ?? 'postgres',
      password: process.env.DB_PASSWORD ?? 'password',
      databaseName: process.env.DB_NAME ?? 'postgres',
      domain: process.env.DB_HOST ?? '127.0.0.1',
      port: Number.parseInt(process.env.DB_PORT ?? '5432'),
    },
  },

  snackbar: {
    top: true,
    right: true,
    duration: 5000,
  },
});
