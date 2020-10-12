import React from 'react';

type Direction = 'Left' | 'Right' | 'Ahead' | 'Behind';

type View = {
  direction: Direction;
  description: string;
};

type Views = View[];

type DefaultButtonProps = Omit<JSX.IntrinsicElements['button'], 'onClick'>;
interface ButtonProps {
  setDisplayContent: React.Dispatch<React.SetStateAction<string>>;
}

interface LookDirection {
  direction: Direction;
  views: Views;
}

function Look(direction: Direction, views: Views) {
  return views.find((v) => v.direction === direction)?.description ?? '';
}

type LookDirectionProps = LookDirection & ButtonProps & DefaultButtonProps;

function LookDirection({ direction, setDisplayContent, views }: LookDirectionProps) {
  return <button onClick={() => setDisplayContent(Look(direction, views))}>{direction}</button>;
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
