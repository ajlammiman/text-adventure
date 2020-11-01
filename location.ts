import { Views } from './looking';

interface Contents {
  help: string;
  views: Views;
  location: Location;
}

type Location = {
  description: string;
  views: Views;
};

export const Location = () => {
  return {
    help: 'This is a help message',
    views: [],
    location: { description: 'Welcome to the game!', views: [] }
  } as Contents;
};
