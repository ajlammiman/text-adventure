import React from 'react';

type Direction = 'Left' | 'Right' | 'Forward' | 'Behind';

type View = {
  direction: Direction;
  description: string;
};

type Views = View[];

export const Looking = ({
  setDisplayContent,
  views
}: {
  setDisplayContent: React.Dispatch<React.SetStateAction<string>>;
  views: Views;
}) => (
  <>
    <button onClick={() => Look(setDisplayContent, 'Left', views)}>Left</button>
    <button onClick={() => Look(setDisplayContent, 'Right', views)}>Right</button>
    <button onClick={() => Look(setDisplayContent, 'Forward', views)}>Forward</button>
    <button onClick={() => Look(setDisplayContent, 'Behind', views)}>Behind</button>
  </>
);

function Look(setDisplayContent: React.Dispatch<React.SetStateAction<string>>, direction: Direction, views: Views) {
  setDisplayContent(views.find((v) => v.direction === direction)?.description ?? '');
}
