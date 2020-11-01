import React, { useState } from 'react';
import { Button } from './generic_components/button';
import { Looking } from './looking';
import { Location } from './location';
import { Help } from './help';

export const Game = () => {
  const location = Location();
  const [displayContent, setDisplayContent] = useState(location.location.description);

  return (
    <>
      <div>{displayContent}</div>
      <Button name="help" content={Help()} updateState={setDisplayContent} />
      <Looking setDisplayContent={setDisplayContent} views={location.location.views} />
    </>
  );
};
