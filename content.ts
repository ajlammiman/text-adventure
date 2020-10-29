import { Views } from './looking';

interface Contents {
  start: string;
  help: string;
  views: Views;
  location: Location;
}

type Location = {
  description: string;
};

export const content = () => {
  return {
    start: 'Welcome to the game!',
    help: 'This is a help message',
    views: [],
    location: { description: 'Welcome to the game!' }
  } as Contents;
};
