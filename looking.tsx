import React from 'react';

export const Looking = ({ setDisplayContent }: { setDisplayContent: React.Dispatch<React.SetStateAction<string>> }) => (
  <>
    <button onClick={() => setDisplayContent('I am looking to the left')}>Left</button>
  </>
);
