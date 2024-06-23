<template>
  <div :class="{ dark: isDark }">
    <NuxtPage />
  </div>
  <NuxtSnackbar />
</template>

<script setup lang="ts">
const { isDark } = storeToRefs(useUi());
</script>
