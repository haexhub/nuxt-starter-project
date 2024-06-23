import { getServerSession } from '#auth';

export default defineEventHandler(async (event) => {
  if (!event.node.req.url?.startsWith('/api/protected/')) {
    return;
  }

  const session = await getServerSession(event);
  if (!session) {
    throw createError({ statusMessage: 'Unauthenticated', statusCode: 403 });
  }
});
