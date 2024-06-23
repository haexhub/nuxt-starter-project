<template>
  <div
    class="h-screen w-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 flex flex-col overflow-hidden min-w-[360px]"
    :class="minWidth"
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

      <UiNavbarItem>
        <UiButton
          @click="isDark = !isDark"
          class="px-2"
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
        <UiLanguageSelection class="border rounded" />
      </UiNavbarItem>
    </UiNavbar>

    <div class="flex h-full">
      <UiSidebar :collapsed="settings.collapsed">
        <NuxtLinkLocale
          v-if="status === 'authenticated'"
          v-for="item in menu.loggedIn"
          :to="item.to"
          activeClass="text-primary-active dark:text-dark-primary-active"
          class="flex items-center justify-start hover:bg-primary dark:hover:bg-dark-primary px-4 py-2 rounded space-x-2"
        >
          <i :class="item.icon" />

          <!-- <Transition name="fade"> -->
          <span>
            {{ item.label }}
          </span>
          <!-- </Transition> -->
        </NuxtLinkLocale>

        <NuxtLinkLocale
          v-else
          v-for="item in menu.loggedOut"
          :to="item.to"
          activeClass="text-primary-active dark:text-dark-primary-active"
          class="flex items-center justify-start hover:bg-primary dark:hover:bg-dark-primary px-3 py-2 rounded space-x-3"
        >
          <i
            :class="item.icon"
            class="shrink-0"
          />
          <!-- <Transition name="fade">
            <span v-if="!settings.collapsed"> -->
          <span>{{ item.label }}</span>
          <!--  </span>
          </Transition> -->
        </NuxtLinkLocale>
      </UiSidebar>
      <div class="md:p-4 overflow-scroll grow">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

const { isDark, minWidth } = storeToRefs(useUi());
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

const { menu, settings } = storeToRefs(useSidebar());
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
