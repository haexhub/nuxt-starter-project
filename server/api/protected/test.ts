import { getServerSession, getToken } from '#auth';
//import { useAppAbility } from '~/composables/useAbility';

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event);
  if (!session) {
    return { status: 'unauthenticated!' };
  }

  const token = await getToken({ event });

  console.log('token', token);
  return {
    status: 'authenticated!',
    text: 'im protected by an in-endpoint check',
    session,
    token,
  };
  //const { can } = useAppAbility();
});
