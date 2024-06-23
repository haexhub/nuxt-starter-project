import { useAbility } from '@casl/vue';
import { AppAbility } from '@/server/authorization/AppAbility';

export const useAppAbility = () => {
  const ctx = useNuxtApp();

  return useAbility<AppAbility>();
};
