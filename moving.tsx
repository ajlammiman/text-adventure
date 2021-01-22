import React from 'react';
import { Button } from './generic_components/button';
import { Location, Locations } from './types/location';
import { Direction } from './types/direction';
import { ActionButton } from './types/action';

type MoveProps = {
  locations: Locations;
  locationLookup: LocationLookup;
} & ActionButton;

export interface LocationLookup {
  (location: Location): string;
}

interface FindLocation {
  (direction: Direction, locations: Locations): Location;
}

const FindLocation: FindLocation = function (direction: Direction, locations: Locations) {
  return locations.find((l) => l.direction === direction) ?? { direction: 'Ahead', id: 0 };
};

function MoveMe(location: Location, locationLookup: LocationLookup) {
  return locationLookup(location);
}

function Move({ direction, setDisplayContent, locations, locationLookup }: MoveProps) {
  return (
    <Button
      name={direction}
      content={MoveMe(FindLocation(direction, locations), locationLookup)}
      updateState={setDisplayContent}
    />
  );
}

export const Moving = ({ setDisplayContent, locations, locationLookup }: MoveProps) => {
  return (
    <>
      <Move
        direction="Ahead"
        setDisplayContent={setDisplayContent}
        locations={locations}
        locationLookup={locationLookup}
      />
      <Move
        direction="Behind"
        setDisplayContent={setDisplayContent}
        locations={locations}
        locationLookup={locationLookup}
      />
      <Move
        direction="Left"
        setDisplayContent={setDisplayContent}
        locations={locations}
        locationLookup={locationLookup}
      />
      <Move
        direction="Right"
        setDisplayContent={setDisplayContent}
        locations={locations}
        locationLookup={locationLookup}
      />
    </>
  );
};
