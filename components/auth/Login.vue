<template>
  <UiPage>
    <div class="flex items-stretch h-full">
      <NuxtImg
        class="object-cover hidden lg:block w-1/2"
        src="/squirel_challenge.jpg"
      />

      <div
        class="p-8 flex flex-col my-auto mx-4 xl:mx-auto w-full lg:w-1/2 xl:w-1/3 bg-slate-300 dark:bg-slate-900 rounded-lg space-y-6"
      >
        <h2 class="text-lg font-medium title-font">
          {{ t('login') }}
        </h2>
        <UiInput
          type="text"
          name="username"
          :placeholder="t('username')"
          :label="t('username')"
          v-model="username"
        >
          <template #left>
            <i class="i-[mdi--person-outline]" />
          </template>
        </UiInput>

        <UiInput
          :label="t('password')"
          :placeholder="t('password')"
          :type="password.show ? 'text' : 'password'"
          name="password"
          v-model="password"
        >
          <template #left>
            <i class="i-[mdi--password-outline]" />
          </template>
          <template #right>
            <UiButton
              class="flex"
              @click.prevent="password.show = !password.show"
            >
              <i
                :class="[
                  password.show
                    ? 'i-[mdi--eye-off-outline]'
                    : 'i-[mdi--eye-outline]',
                ]"
              />
            </UiButton>
          </template>
        </UiInput>

        <UiButton
          class="bg-primary-500 border-0 py-2 px-8 focus:outline-none hover:bg-primary-600 rounded text-lg"
          @click.prevent="loginAsync()"
        >
          {{ t('login') }}
        </UiButton>
      </div>
    </div>
  </UiPage>
</template>

<script setup>
const password = reactive({
  show: false,
  value: '',
});

const username = ref('');

const { t } = useI18n({});

const { signIn } = useAuth();

const loginAsync = async () => {
  const { error } = await signIn('credentials', {
    username: username.value,
    password: password.value,
    redirect: false,
  });
  if (error) {
    // Do your custom error handling here
    alert('You have made a terrible mistake while entering your credentials');
  } else {
    // No error, continue with the sign in, e.g., by following the returned redirect:
    return navigateTo('/protected', { external: true });
  }
};
</script>

<i18n lang="json">
{
  "de": {
    "login": "Anmelden",
    "username": "Nutzername",
    "password": "Passwort"
  },
  "en": {
    "login": "Login",
    "username": "Username",
    "password": "Password"
  }
}
</i18n>
