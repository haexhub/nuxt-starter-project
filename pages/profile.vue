<template>
  <NuxtLayout>
    <div class="pt-16">
      <div class="h-screen bg-purple-900 flex flex-col">
        <span>
          {{ status }}
        </span>

        <span>
          {{ data }}
        </span>
      </div>
      <div class="h-screen bg-blue-400"></div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const { status, data } = useAuth();
</script>
