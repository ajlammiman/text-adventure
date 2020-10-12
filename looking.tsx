import React from 'react';

export const Looking = ({ setDisplayContent }: { setDisplayContent: React.Dispatch<React.SetStateAction<string>> }) => (
  <>
    <button onClick={() => Look(setDisplayContent)}>Left</button>
  </>
);

function Look(setDisplayContent: React.Dispatch<React.SetStateAction<string>>) {
    setDisplayContent('I am looking to the left');
}
