import React from 'react';
import { MoveProps, MovingProps, FindLocation, MoveMe } from './moving.context';
import { Button } from './generic_components/button';

function Move({ direction, setDisplayContent, locations, locationLookup }: MoveProps) {
  return (
    <Button
      name={`Move ${direction}`}
      content={MoveMe(FindLocation(direction, locations), locationLookup)}
      updateState={setDisplayContent}
    />
  );
}

export const Moving = ({ setDisplayContent, locations, locationLookup }: MovingProps) => {
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
