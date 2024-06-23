<template>
  <div ref="activator">
    <button
      :id
      class="p-2 bg-primary dark:bg-dark-primary hover:bg-primary-hover dark:hover:bg-dark-primary-hover focus:ring-4 focus:outline-none focus:ring-primary-focus dark:focus:ring-dark-primary-focus font-medium rounded-lg text-sm text-center inline-flex items-center"
      type="button"
      @click.prevent="toogleMenu"
    >
      <slot
        name="value"
        :value
      />
      <i class="i-[material-symbols--keyboard-arrow-down]" />
    </button>

    <!-- Dropdown menu -->
    <div
      id="dropdown"
      class="z-10 bg-white divide-y divide-slate-100 rounded-lg shadow dark:bg-slate-700 absolute top-14"
      :class="{ hidden: !show }"
    >
      <ul
        class="py-2 text-sm text-slate-700 dark:text-slate-200"
        :aria-labelledby="id"
      >
        <li
          v-for="option in options"
          :key="option.code"
          class="px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600 dark:hover:text-white"
          @click="value = option"
        >
          <slot
            name="option"
            :option
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';

const id = useId();

defineProps({
  label: String,
  options: {
    type: Array as PropType<Record<string, any>[]>,
    default: () => [],
  },
});

const show = ref(false);
const toogleMenu = () => {
  show.value = !show.value;
};
const value = defineModel<Record<string, any>>();

const activator = ref(null);

onClickOutside(activator, () => (show.value = false));
</script>
