<template>
  <NuxtLayout>
    <UiPage>
      <div class="h-screen bg-purple-900 flex flex-col p-8">
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
const { status, data } = useAuth();

const res = await useFetch('/api/protected/test');
</script>
