import React from 'react';

type Direction = 'Left' | 'Right' | 'Ahead' | 'Behind';

type View = {
  direction: Direction;
  description: string;
};

type Views = View[];

interface ButtonProps {
  direction: Direction;
  setDisplayContent: React.Dispatch<React.SetStateAction<string>>;
  views: Views;
}

function Button({ direction, setDisplayContent, views }: ButtonProps) {
  return <button onClick={() => Look(setDisplayContent, direction, views)}>{direction}</button>;
}

export const Looking = ({
  setDisplayContent,
  views
}: {
  setDisplayContent: React.Dispatch<React.SetStateAction<string>>;
  views: Views;
}) => (
  <>
    <Button direction="Left" setDisplayContent={setDisplayContent} views={views} />
    <Button direction="Right" setDisplayContent={setDisplayContent} views={views} />
    <Button direction="Ahead" setDisplayContent={setDisplayContent} views={views} />
    <Button direction="Behind" setDisplayContent={setDisplayContent} views={views} />
  </>
);

function Look(setDisplayContent: React.Dispatch<React.SetStateAction<string>>, direction: Direction, views: Views) {
  setDisplayContent(views.find((v) => v.direction === direction)?.description ?? '');
}
