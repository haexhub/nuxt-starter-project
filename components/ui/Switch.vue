<template>
  <label class="inline-flex items-center me-5 cursor-pointer">
    <input
      type="checkbox"
      v-model="input"
      class="sr-only peer"
    />
    <div
      class="relative w-11 h-6 bg-slate-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 dark:bg-slate-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-primary-600"
    ></div>
    <!-- <span
      class="ms-3 text-2xl font-medium text-slate-900 dark:text-slate-200"
      :class="icon"
    >
    </span> -->
    <span class="ms-3 text-md font-medium text-slate-900 dark:text-slate-300">
      wdwad
    </span>
  </label>
</template>

<script setup lang="ts">
defineProps({
  icon: String,
});
const input = defineModel();
</script>
