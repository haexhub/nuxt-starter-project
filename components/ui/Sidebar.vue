<template>
  <div
    class="bg-slate-200 dark:bg-slate-900 dark:text-dark-text h-full flex flex-col justify-between overflow-hidden shrink-0 transition-[width] ease-in duration-500 border-r border-slate-300 dark:border-slate-600 rounded-r"
    :class="[collapsed ? 'w-0 sm:w-10' : 'w-44']"
  >
    <div>
      <div class="flex flex-col space-y-2 py-4">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  show: Boolean,
  collapsed: Boolean,
});
</script>
