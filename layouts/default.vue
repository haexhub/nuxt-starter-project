<template>
  <div
    class="h-screen w-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200"
    :class="ui.minWidth"
  >
    <UiNavbar>
      <UiNavbarItem v-if="status === 'authenticated'">
        <UiButton
          @click="logoutAsync"
          class="px-3"
        >
          {{ t('logout') }}
        </UiButton>
      </UiNavbarItem>

      <UiNavbarLink
        v-else
        to="login"
        icon="i-[material-symbols--login]"
        :text="t('login')"
      />

      <UiNavbarItem>
        <UiButton
          @click="isDark = !isDark"
          class="p-3"
        >
          <i
            :class="
              isDark
                ? 'i-[material-symbols--light-mode-outline] bg-yellow-300'
                : 'i-[material-symbols--dark-mode-outline] bg-orange-300'
            "
          ></i>
        </UiButton>
      </UiNavbarItem>

      <UiNavbarItem>
        <UiLanguageSelection />
      </UiNavbarItem>
    </UiNavbar>

    <div class="p-4 h-full overflow-scroll">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

const {
  app: { ui },
} = useRuntimeConfig();

const { isDark } = storeToRefs(useUi());
const { status, signOut } = useAuth();

const localeRoute = useLocaleRoute();
const snackbar = useSnackbar();

const logoutAsync = async () => {
  await signOut({ redirect: false });
  snackbar.add({
    type: 'success',
    text: t('logoutSuccess'),
  });
  navigateTo(localeRoute('/'));
};
</script>

<i18n lang="json">
{
  "de": {
    "login": "Einloggen",
    "logout": "Abmelden",
    "logoutSuccess": "Erfolgreich abgemeldet"
  },

  "en": {
    "login": "Login",
    "logout": "Logout",
    "logoutSuccess": "Logout successfull"
  }
}
</i18n>
