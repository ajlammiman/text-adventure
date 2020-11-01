import React, { useState } from 'react';
import { Button } from './generic_components/button';
import { Looking } from './looking';
import { Location } from './location';

export const Game = () => {
  const location = Location();
  const [displayContent, setDisplayContent] = useState(location.location.description);

  return (
    <>
      <div>{displayContent}</div>
      <Button name="help" content={location.help} updateState={setDisplayContent} />
      <Looking setDisplayContent={setDisplayContent} views={location.views} />
    </>
  );
};
