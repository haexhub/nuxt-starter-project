<template>
  <div ref="activator">
    <button
      :id
      class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      type="button"
      @click.prevent="toogleMenu"
    >
      <slot
        name="value"
        :value
      />
      <svg
        class="w-2.5 h-2.5 ms-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 1 4 4 4-4"
        />
      </svg>
    </button>

    <!-- Dropdown menu -->
    <div
      id="dropdown"
      class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 absolute top-14"
      :class="{ hidden: !show }"
    >
      <ul
        class="py-2 text-sm text-gray-700 dark:text-gray-200"
        :aria-labelledby="id"
      >
        <li
          v-for="option in options"
          :key="option.code"
          class="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
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
