import React from 'react';
import { Button } from './generic_components/button';
import { Location } from './location';
import { Direction } from './shared_types/direction';

type Location = {
  direction: Direction;
  id: number;
};
type Locations = Location[];

function locationLookup(location: Location) {
  if (location.id === 1) return 'some place';

  return 'no place';
}

function Move(direction: Direction, locations: Locations) {
  const location: Location = locations.find((l) => l.direction === direction) ?? { direction: 'Ahead', id: 0 };

  return locationLookup(location);
}

export const Moving = ({
  setDisplayContent,
  locations,
  direction
}: {
  setDisplayContent: React.Dispatch<React.SetStateAction<string>>;
  locations: Locations;
  direction: Direction;
}) => {
  return (
    <>
      <Button name={direction} content={Move(direction, locations)} updateState={setDisplayContent} />
    </>
  );
};
