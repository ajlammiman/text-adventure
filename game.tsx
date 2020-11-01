import React, { useState } from 'react';
import { Button } from './generic_components/button';
import { Looking } from './looking';
import { Location } from './content';

export const Game = () => {
  const gameContent = Location();
  const [displayContent, setDisplayContent] = useState(gameContent.location.description);

  return (
    <>
      <div>{displayContent}</div>
      <Button name="help" content={gameContent.help} updateState={setDisplayContent} />
      <Looking setDisplayContent={setDisplayContent} views={gameContent.views} />
    </>
  );
};
