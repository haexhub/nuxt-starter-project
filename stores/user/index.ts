export const useUser = defineStore('user', () => {
  const tokens = reactive({
    access: '',
    refresh: '',
  });

  const loginAsync = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const response = await $fetch<{ access: string; refresh: string }>(
      '/api/authentication/login',
      {
        method: 'post',
        body: {
          email,
          password,
        },
      }
    );
    tokens.access = response.access;
    tokens.refresh = response.refresh;
  };

  return {
    loginAsync,
    tokens,
  };
});
