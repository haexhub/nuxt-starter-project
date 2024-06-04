<template>
  <div class="relative mb-2">
    <label
      v-if="label"
      :for="id"
      class="leading-7 text-sm font-medium text-slate-600 dark:text-slate-400"
      >{{ label }}</label
    >
    <div class="flex">
      <div
        v-if="$slots.left"
        class="flex items-center text-slate-800 dark:text-slate-200 px-2 bg-slate-200 dark:bg-slate-700 border-y border-l border-slate-500 dark:border-slate-600 rounded-l-lg"
      >
        <slot name="left" />
      </div>

      <input
        :class="[
          { 'rounded-l-lg': !$slots.left },
          { 'rounded-r-lg': !$slots.right },
        ]"
        :type
        :id
        :name
        :placeholder
        class="w-full bg-slate-100 bg-opacity-20 focus:bg-opacity-10 focus:ring-2 focus:ring-primary-900 focus:border-primary-500 border-slate-600 transition-colors duration-200 ease-in-out text-base outline-none py-1 px-3 leading-8 border z-10"
      />

      <div
        v-if="$slots.right"
        class="flex items-center text-slate-800 dark:text-slate-200 px-2 bg-slate-200 dark:bg-slate-700 border-y border-r border-slate-500 dark:border-slate-600 rounded-r-lg"
      >
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  placeholder: String,
  type: {
    type: String,
    default: 'text',
  },
  label: String,
  name: String,
});

const input = defineModel({
  required: true,
});

const id = useId();
</script>
