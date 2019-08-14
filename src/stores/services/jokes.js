import { clientApi } from '@/utils/clientApi';

export const requestJoke = () => {
  return clientApi('get', 'jokes/random');
};
