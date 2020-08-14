import React, { useState } from 'react';
import { content, location, Location, GameContent } from './content';

export const Game = () => {
  const [displayContent, setDisplayContent] = useState(content.welcome);

  return (
    <>
      <div>{displayContent}</div>
      <button onClick={() => setDisplayContent(content.help)}>help</button>
      <Looking location={location} setDisplayContent={setDisplayContent} />
      <Moving content={content} setDisplayContent={setDisplayContent} />
    </>
  );
};

const Looking = ({
  location,
  setDisplayContent
}: {
  location: Location;
  setDisplayContent: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <>
      <button onClick={() => setDisplayContent(location.surroundings.left)}>Look Left</button>
      <button onClick={() => setDisplayContent(location.surroundings.right)}>Look Right</button>
      <button onClick={() => setDisplayContent(location.surroundings.front)}>Look Ahead</button>
      <button onClick={() => setDisplayContent(location.surroundings.behind)}>Look Behind</button>
    </>
  );
};

const Moving = ({
  content,
  setDisplayContent
}: {
  content: GameContent;
  setDisplayContent: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <>
      <button onClick={() => setDisplayContent(content.forwards)}>Move Forward</button>
      <button onClick={() => setDisplayContent(content.backwards)}>Move Backwards</button>
      <button onClick={() => setDisplayContent(content.movingLeft)}>Move Left</button>
      <button onClick={() => setDisplayContent(content.movingRight)}>Move Right</button>
    </>
  );
};
