import React, { useState } from 'react';
import { content } from './content';

export const Game = () => {
  const [displayContent, setDisplayContent] = useState(content.welcome);

  return (
    <>
      <div>{displayContent}</div>
      <button onClick={() => setDisplayContent(content.help)}>help</button>
      <button onClick={() => setDisplayContent(content.left)}>Look Left</button>
    </>
  );
};
