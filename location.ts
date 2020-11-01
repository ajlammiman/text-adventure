import { Views } from './looking';

interface Contents {
  location: Location;
}

type Location = {
  description: string;
  views: Views;
};

export const Location = () => {
  return {
    location: { description: 'Welcome to the game!', views: [] }
  } as Contents;
};

export const Help = () => 'This is a help message';
