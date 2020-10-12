import React from 'react';

type Direction = 'left' | 'right' | 'forward' | 'backward';

export const Looking = ({ setDisplayContent }: { setDisplayContent: React.Dispatch<React.SetStateAction<string>> }) => (
  <>
    <button onClick={() => Look(setDisplayContent, 'left')}>Left</button>
    <button onClick={() => Look(setDisplayContent, 'right')}>Right</button>
  </>
);

function Look(setDisplayContent: React.Dispatch<React.SetStateAction<string>>, direction: Direction) {
  if (direction === 'left') setDisplayContent('I am looking to the left');

  if (direction === 'right') setDisplayContent('I am looking to the right');
}
