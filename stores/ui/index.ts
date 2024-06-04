export const useUi = defineStore('uiStore', () => {
  const isDark = ref(false);

  return {
    isDark,
  };
});
