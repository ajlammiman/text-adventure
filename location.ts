import { Views } from './types/view';
import { Locations } from './types/location';

type Location = {
  description: string;
  views: Views;
  locations: Locations;
};

export function Location(): Location {
  return { description: 'Welcome to the game!', views: [], locations: [] };
}
