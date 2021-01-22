import { Location, Locations } from './types/location';
import { ActionButton } from './types/action';
import { Direction } from './types/direction';

export type MoveProps = {
  locations: Locations;
  locationLookup: LocationLookup;
} & ActionButton;

export type MovingProps = {
  setDisplayContent: React.Dispatch<React.SetStateAction<string>>;
  locations: Locations;
  locationLookup: LocationLookup;
};

export interface LocationLookup {
  (location: Location): string;
}

interface FindLocation {
  (direction: Direction, locations: Locations): Location;
}

export const FindLocation: FindLocation = function (direction: Direction, locations: Locations) {
  return locations.find((l) => l.direction === direction) ?? { direction: 'Ahead', id: 0 };
};

export function MoveMe(location: Location, locationLookup: LocationLookup) {
  return locationLookup(location);
}
