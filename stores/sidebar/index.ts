export const useSidebar = defineStore('sidebarStore', () => {
  const { t } = useI18n();
  const menu = computed(() => ({
    admin: [
      /* { label: 'Home', icon: 'HOME', to: '/' },
      {
        label: t('store.sidebar.organization'),
        icon: 'company',
        to: '/organization',
      },
      { label: t('store.sidebar.users'), icon: 'USER', to: '/users' },
      {
        label: t('store.sidebar.challenges'),
        icon: 'FLAG',
        to: '/challenges',
      }, */
    ],
  }));

  const settings = reactive({
    collapsed: false,
    transition: 'transition-[width] ease-in duration-1000',
  });

  const toogleSidebar = () => {
    settings.collapsed = !settings.collapsed;
  };

  return {
    menu,
    toogleSidebar,
    settings,
  };
});
