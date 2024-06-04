<template>
  <section
    class="bg-slate-200 dark:bg-slate-800 w-full rounded-lg overflow-hidden"
    :class="ui.minWidth"
  >
    <slot />
  </section>
</template>

<script setup lang="ts">
const {
  app: { ui },
} = useRuntimeConfig();
</script>
