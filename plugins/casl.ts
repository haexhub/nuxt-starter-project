import { abilitiesPlugin } from '@casl/vue';
import AppAbility from '@/server/authorization/AppAbility';

/* export default defineNuxtPlugin({
  name: 'casl-plugin',
  enforce: 'pre',

  async setup(nuxtApp) {
    nuxtApp.vueApp.use(abilitiesPlugin, AppAbility);
  },
}); */

export default defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.vueApp.use(abilitiesPlugin, AppAbility);
});
