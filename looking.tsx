import React from 'react';
import { Button } from './generic_components/button';
import { Direction } from './shared_types/direction';

type View = {
  direction: Direction;
  description: string;
};

export type Views = View[];

interface LookDirection {
  direction: Direction;
  setDisplayContent: React.Dispatch<React.SetStateAction<string>>;
  views: Views;
}

function Look(direction: Direction, views: Views) {
  return views.find((v) => v.direction === direction)?.description ?? '';
}

type LookDirectionProps = LookDirection;

function LookDirection({ direction, setDisplayContent, views }: LookDirectionProps) {
  return <Button name={direction} content={Look(direction, views)} updateState={setDisplayContent} />;
}

export const Looking = ({
  setDisplayContent,
  views
}: {
  setDisplayContent: React.Dispatch<React.SetStateAction<string>>;
  views: Views;
}) => (
  <>
    <LookDirection direction="Left" setDisplayContent={setDisplayContent} views={views} />
    <LookDirection direction="Right" setDisplayContent={setDisplayContent} views={views} />
    <LookDirection direction="Ahead" setDisplayContent={setDisplayContent} views={views} />
    <LookDirection direction="Behind" setDisplayContent={setDisplayContent} views={views} />
  </>
);
