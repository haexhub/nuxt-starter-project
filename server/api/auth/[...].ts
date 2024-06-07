// file: ~/server/api/auth/[...].ts
import { NuxtAuthHandler } from '#auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { MaybeRef, toValue } from 'vue';

export default NuxtAuthHandler({
  // A secret string you define, to ensure correct encryption
  secret: useRuntimeConfig().auth.secret,

  pages: {
    signIn: '/login',
    error: '/error',
  },

  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials', // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'Username' },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Password',
        },
      },

      authorize(
        credentials: MaybeRef<{
          username: string;
          password: string;
          redirect: boolean;
        }>
      ) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // NOTE: THE BELOW LOGIC IS NOT SAFE OR PROPER FOR AUTHENTICATION!
        const _credentials = toValue(credentials);
        console.log(
          'login with',
          _credentials,
          'username',
          _credentials.username,
          'password',
          _credentials.password
        );

        const user = {
          id: '1',
          name: 'J Smith',
          username: 'jsmith',
          password: 'hunter2',
        };
        if (
          _credentials?.username === user.username &&
          _credentials?.password === user.password
        ) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // eslint-disable-next-line no-console
          console.error(
            'Warning: Malicious login attempt registered, bad credentials provided'
          );
          // If you return null then an error will be displayed advising the user to check their details.
          return null;
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
});
