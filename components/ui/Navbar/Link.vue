<template>
  <UiNavbarItem>
    <NuxtLinkLocale
      class="px-3 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
      :to
    >
      <i
        class="text-lg leading-lg text-white"
        :class="icon"
        v-if="icon"
      />
      <span class="ml-2">{{ text }}</span>
    </NuxtLinkLocale>
  </UiNavbarItem>
</template>

<script setup lang="ts">
defineProps({
  to: String,
  icon: String,
  text: String,
});
</script>
