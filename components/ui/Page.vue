<template>
  <section class="bg-slate-200 dark:bg-slate-900 w-full h-full rounded-lg">
    <slot />
  </section>
</template>

<script setup lang="ts">
const {
  app: { ui },
} = useRuntimeConfig();
</script>
