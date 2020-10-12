import React, { useState } from 'react';
import { Button } from './generic_components/button';

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
    </>
  );
};
