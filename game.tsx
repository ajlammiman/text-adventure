import React, { useState } from 'react';
import { Button } from './generic_components/button';
import { Looking } from './looking';
import { Moving, LocationLookup } from './moving';
import { Location } from './location';
import { Help } from './help';
import { Direction } from './types/direction';

export const Game = () => {
  const location = Location();
  const [displayContent, setDisplayContent] = useState(location.description);
  const locationLookup: LocationLookup = function (location: { direction: Direction; id: number }) {
    const locations = [{ id: 1, description: 'some place' }];
    return locations.find((x) => x.id === location.id)?.description ?? '';
  };

  return (
    <>
      <div>{displayContent}</div>
      <Button name="help" content={Help()} updateState={setDisplayContent} />
      <Looking setDisplayContent={setDisplayContent} views={location.views} />
      <Moving setDisplayContent={setDisplayContent} locations={location.locations} locationLookup={locationLookup} />
    </>
  );
};
