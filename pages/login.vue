<!-- file: ~/pages/login.vue -->
<template>
  <NuxtLayout>
    <div class="h-full flex pt-16 min-w-[420px]">
      <AuthLogin />
    </div>
    <!-- <div class="p-4 flex flex-col dark:bg-slate-900 bg-opacity-50 h-full">
      <form class="flex flex-col gap-2">
        <UiInput
          v-model="credentials.username"
          label="Username"
          placeholder="Username"
        >
          <template #left>
            <span class="i-[mdi--mail]"></span>
          </template>

          <template #right>
            <button class="flex">
              <span class="i-[mdi--mail]"></span>
            </button>
          </template>
        </UiInput>
        <UiInput
          v-model="credentials.password"
          placeholder="Password"
          :type="credentials.showPassword ? 'text' : 'password'"
        >
          <template #right>
            <button
              type="button"
              class="flex"
              @click="credentials.showPassword = !credentials.showPassword"
            >
              <span class="i-[mdi--mail]"></span>
            </button>
          </template>
        </UiInput>

        <button
          type="submit"
          @click.prevent="loginAsync"
        >
          Username and Password
        </button>
      </form>
    </div> -->
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  auth: false,
});

const credentials = reactive({
  username: '',
  password: '',
  showPassword: false,
});

const { signIn } = useAuth();

const loginAsync = async () => {
  const { error } = await signIn('credentials', {
    username: credentials.username,
    password: credentials.password,
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
