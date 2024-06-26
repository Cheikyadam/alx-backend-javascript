import handleProfileSignup from './6-final-user';

console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));

handleProfileSignup('John', 'Doe', 'my-photo.jpg')
  .then((results) => console.log(results))
  .catch((error) => console.error(error));