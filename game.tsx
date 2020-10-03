import React, { useState } from 'react';

const content = {
  start: 'Welcome to the game!',
  help: 'This is a help message'
};

export const Game = () => {
  const [displayContent, setDisplayContent] = useState(content.start);

  return (
    <>
      <div>{displayContent}</div>
      <button onClick={() => setDisplayContent(content.help)}>help</button>
    </>
  );
};
