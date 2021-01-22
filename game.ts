import { useState } from 'react';
import { LocationLookup } from './moving.context';
import { Location } from './location';
import { Direction } from './types/direction';

export const useGame = function () {
  const location = Location();
  const [displayContent, setDisplayContent] = useState(location.description);
  const locationLookup: LocationLookup = function (location: { direction: Direction; id: number }) {
    const locations = [{ id: 1, description: 'some place' }];
    return locations.find((x) => x.id === location.id)?.description ?? '';
  };

  return { location, displayContent, setDisplayContent, locationLookup };
};
