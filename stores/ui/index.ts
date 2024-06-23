export const useUi = defineStore('uiStore', () => {
  const isDark = ref(false);
  const minWidth = 'min-w-[340px]';

  return {
    isDark,
    minWidth,
  };
});
