<template>
  <NuxtLayout>
    <div class="pt-16 h-full">
      <div
        class="bg-cyan-400 h-full rounded-lg flex flex-col items-center justify-center"
      >
        Starter Template

        <div>can {{ can('delete', 'User') }}</div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  auth: false,
});

const { can } = useAppAbility();
</script>
