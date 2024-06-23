<template>
  <NuxtLayout>
    <UiPage>
      <div
        class="bg-cyan-400 h-full rounded-lg flex flex-col items-center justify-center"
      >
        Starter Template {{ t('store.sidebar.profile') }}
      </div>
    </UiPage>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  auth: false,
});

const { t } = useI18n();
</script>
