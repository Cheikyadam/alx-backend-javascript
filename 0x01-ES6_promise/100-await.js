import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const photoRes = await uploadPhoto()
    .then((result) => result)
    .catch(() => 'null');

  const creatRes = await createUser()
    .then((result) => result)
    .catch(() => 'null');

  if (photoRes === 'null' || creatRes === 'null') {
    return { photo: 'null', user: 'null' };
  }
  return { photo: photoRes, user: creatRes };
}
