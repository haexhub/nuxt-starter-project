<template>
  <UiSelect
    :options="languageItems"
    v-model="currentLocale"
  >
    <template #value="slotProps">
      <div class="flex space-x-2 items-center">
        <i :class="slotProps.value?.icon"></i>
        <div>{{ slotProps.value?.code }}</div>
      </div>
    </template>

    <template #option="slotProps">
      <div class="flex space-x-2 items-center">
        <i :class="slotProps.option?.icon"></i>
        <div>{{ slotProps.option?.name }}</div>
      </div>
    </template>
  </UiSelect>
</template>

<script setup lang="ts">
const { locale, setLocale, defaultLocale } = useI18n();

const languageItems = ref([
  { code: 'de', name: 'Deutsch', icon: 'i-[emojione--flag-for-germany]' },
  {
    code: 'en',
    name: 'English',
    icon: 'i-[emojione--flag-for-united-kingdom]',
  },
]);

const currentLocale = computed({
  get: () => languageItems.value.find((i) => i.code === locale.value),
  set: (newLocale) => {
    setLocale(newLocale?.code ?? defaultLocale);
  },
});
</script>
