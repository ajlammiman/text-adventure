import { Views } from './looking';

type Location = {
  description: string;
  views: Views;
};

export function Location(): Location {
  return { description: 'Welcome to the game!', views: [] };
}
