import React from 'react';

type Direction = 'Left' | 'Right';

export const Looking = ({ setDisplayContent }: { setDisplayContent: React.Dispatch<React.SetStateAction<string>> }) => (
  <>
    <button onClick={() => Look(setDisplayContent, 'Left')}>Left</button>
    <button onClick={() => Look(setDisplayContent, 'Right')}>Right</button>
  </>
);

function Look(setDisplayContent: React.Dispatch<React.SetStateAction<string>>, direction: Direction) {
  if (direction === 'Left') setDisplayContent('A description of what I can see on my left');

  if (direction === 'Right') setDisplayContent('A description of what I can see on my right');
}
