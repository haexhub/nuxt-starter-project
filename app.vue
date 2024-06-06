<template>
  <div :class="{ dark: isDark }">
    <NuxtPage />
  </div>
  <NuxtSnackbar />
</template>

<script setup lang="ts">
const { isDark } = storeToRefs(useUi());
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.1s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
