import { Views } from './looking';

interface Contents {
  help: string;
  views: Views;
  location: Location;
}

type Location = {
  description: string;
};

export const content = () => {
  function getCurrentLocation(location: string): Location {
    return location ? { description: 'Welcome to the game!' } : { description: '' };
  }

  return {
    help: 'This is a help message',
    views: [],
    location: getCurrentLocation('694450893FFF4562A227C2EDA5DA7696')
  } as Contents;
};
