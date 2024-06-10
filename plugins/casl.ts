import { useAbility } from '@casl/vue';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(useAbility);
});
