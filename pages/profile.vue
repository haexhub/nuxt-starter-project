<template>
  <NuxtLayout>
    <UiPage>
      <div class="h-screen bg-purple-900 flex flex-col">
        <span>
          {{ status }}
        </span>

        <span>
          {{ data }}
        </span>

        <span>
          {{ res }}
        </span>
      </div>
      <div class="h-screen bg-blue-400"></div>
    </UiPage>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  auth: false,
});
const { status, data } = useAuth();

//const headers = useRequestHeaders(['cookie']) as HeadersInit;
const res = await useFetch('/api/protected/test');
</script>
