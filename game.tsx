import React, { useState } from 'react';
import { content, GameContent } from './content';

export const Game = () => {
  const [displayContent, setDisplayContent] = useState(content.welcome);

  return (
    <>
      <div>{displayContent}</div>
      <button onClick={() => setDisplayContent(content.help)}>help</button>
      <Looking content={content} setDisplayContent={setDisplayContent} />
      <button onClick={() => setDisplayContent(content.forwards)}>Move Forward</button>
      <button onClick={() => setDisplayContent(content.backwards)}>Move Backwards</button>
      <button onClick={() => setDisplayContent(content.movingLeft)}>Move Left</button>
      <button onClick={() => setDisplayContent(content.movingRight)}>Move Right</button>
    </>
  );
};

interface ActionComponent {
  content: GameContent;
  setDisplayContent: React.Dispatch<React.SetStateAction<string>>;
}

const Looking = ({ content, setDisplayContent }: ActionComponent) => {
  return (
    <>
      <button onClick={() => setDisplayContent(content.left)}>Look Left</button>
      <button onClick={() => setDisplayContent(content.right)}>Look Right</button>
      <button onClick={() => setDisplayContent(content.ahead)}>Look Ahead</button>
      <button onClick={() => setDisplayContent(content.behind)}>Look Behind</button>
    </>
  );
};
