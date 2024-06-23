<template>
  <button
    type="button"
    class="flex text-center items-center justify-center"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineEmits(['click']);
</script>
