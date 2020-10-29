import React, { useState } from 'react';
import { Button } from './generic_components/button';
import { Looking } from './looking';
import { content as gameContent } from './content';

const content = {
  start: 'Welcome to the game!',
  help: 'This is a help message'
};

export const Game = () => {
  const [displayContent, setDisplayContent] = useState(content.start);

  return (
    <>
      <div>{displayContent}</div>
      <Button name="help" content={content.help} updateState={setDisplayContent} />
      <Looking setDisplayContent={setDisplayContent} views={gameContent().Views} />
    </>
  );
};
