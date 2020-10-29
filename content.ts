import { Views } from './looking';

interface Contents {
  start: string;
  help: string;
  views: Views;
}

export const content = () => {
  return {
    start: 'Welcome to the game!',
    help: 'This is a help message',
    views: []
  } as Contents;
};
