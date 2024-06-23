export const useSidebar = defineStore('sidebarStore', () => {
  const { t } = useI18n();
  const menu = computed(() => ({
    loggedOut: [
      {
        label: t('store.sidebar.login'),
        icon: 'i-[material-symbols--login]',
        to: '/login',
      },
    ],

    loggedIn: [
      {
        label: t('store.sidebar.profile'),
        icon: 'i-[material-symbols--person-outline]',
        to: '/profile',
      },
    ],
  }));

  const settings = reactive({
    collapsed: false,
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
