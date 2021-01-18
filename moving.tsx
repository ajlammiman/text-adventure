import React from 'react';
import { Button } from './generic_components/button';
import { Location } from './location';
import { Direction } from './shared_types/direction';

type Location = {
  direction: Direction;
  id: number;
};
type Locations = Location[];

type MoveProps = {
  setDisplayContent: React.Dispatch<React.SetStateAction<string>>;
  locations: Locations;
  locationLookup: LocationLookup;
};

type MoveInADirection = {
  direction: Direction;
  setDisplayContent: React.Dispatch<React.SetStateAction<string>>;
  locations: Locations;
  locationLookup: LocationLookup;
};

type MoveInADirectionProps = MoveInADirection;

export interface LocationLookup {
  (location: Location): string;
}

function MoveInADirection({ direction, setDisplayContent, locations, locationLookup }: MoveInADirectionProps) {
  return (
    <Button name={direction} content={Move(direction, locations, locationLookup)} updateState={setDisplayContent} />
  );
}

function Move(direction: Direction, locations: Locations, locationLookup: LocationLookup) {
  const location: Location = locations.find((l) => l.direction === direction) ?? { direction: 'Ahead', id: 0 };

  return locationLookup(location);
}

export const Moving = ({ setDisplayContent, locations, locationLookup }: MoveProps) => {
  return (
    <>
      <MoveInADirection
        direction="Ahead"
        setDisplayContent={setDisplayContent}
        locations={locations}
        locationLookup={locationLookup}
      />
      <MoveInADirection
        direction="Behind"
        setDisplayContent={setDisplayContent}
        locations={locations}
        locationLookup={locationLookup}
      />
      <MoveInADirection
        direction="Left"
        setDisplayContent={setDisplayContent}
        locations={locations}
        locationLookup={locationLookup}
      />
      <MoveInADirection
        direction="Right"
        setDisplayContent={setDisplayContent}
        locations={locations}
        locationLookup={locationLookup}
      />
    </>
  );
};
