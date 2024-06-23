import { getServerSession, getToken } from '#auth';

export default defineEventHandler(async (event) => {
  console.log('upload keepass');
  const { files } = await readBody<{ files: NuxtFile[] }>(event);

  for (const file of files) {
    await storeFileLocally(
      file, // the file object
      8, // you can add a name for the file or length of Unique ID that will be automatically generated!
      '/userFiles' // the folder the file will be stored in
    );

    // {OR}

    // Parses a data URL and returns an object with the binary data and the file extension.
    //const { binaryString, ext } = parseDataUrl(file.content);
  }

  const token = await getToken({ event });

  console.log('token', token);
  return {
    token,
  };
  //const { can } = useAppAbility();
});

interface NuxtFile {
  name: string;
  content: string;
  size: string;
  type: string;
  lastModified: string;
}
