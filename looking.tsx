import React from 'react';

enum Direction {
  Left,
  Right,
  Forward,
  Backwards
}

export const Looking = ({ setDisplayContent }: { setDisplayContent: React.Dispatch<React.SetStateAction<string>> }) => (
  <>
    <button onClick={() => Look(setDisplayContent, Direction.Left)}>Left</button>
    <button onClick={() => Look(setDisplayContent, Direction.Right)}>Right</button>
  </>
);

function Look(setDisplayContent: React.Dispatch<React.SetStateAction<string>>, direction: Direction) {
  if (direction === Direction.Left) setDisplayContent('A description of what I can see on my left');

  if (direction === Direction.Right) setDisplayContent('A description of what I can see on my right');
}
