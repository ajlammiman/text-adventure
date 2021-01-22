import React from 'react';
import { useGame } from './game';
import { Button } from './generic_components/button';
import { Looking } from './looking';
import { Moving } from './moving';
import { Help } from './help';

export const Game = () => {
  const game = useGame();

  return (
    <>
      <div>{game.displayContent}</div>
      <Button name="help" content={Help()} updateState={game.setDisplayContent} />
      <Looking setDisplayContent={game.setDisplayContent} views={game.location.views} />
      <Moving
        setDisplayContent={game.setDisplayContent}
        locations={game.location.locations}
        locationLookup={game.locationLookup}
      />
    </>
  );
};
