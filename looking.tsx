import React from 'react';

type Direction = 'Left' | 'Right' | 'Ahead' | 'Behind';

type View = {
  direction: Direction;
  description: string;
};

type Views = View[];

type ButtonProps = Omit<JSX.IntrinsicElements['button'], 'onClick'>;

interface LookDirection {
  direction: Direction;
  setDisplayContent: React.Dispatch<React.SetStateAction<string>>;
  views: Views;
}

type LookDirectionProps = LookDirection & ButtonProps;

function LookDirection({ direction, setDisplayContent, views }: LookDirectionProps) {
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
    <LookDirection direction="Left" setDisplayContent={setDisplayContent} views={views} />
    <LookDirection direction="Right" setDisplayContent={setDisplayContent} views={views} />
    <LookDirection direction="Ahead" setDisplayContent={setDisplayContent} views={views} />
    <LookDirection direction="Behind" setDisplayContent={setDisplayContent} views={views} />
  </>
);

function Look(setDisplayContent: React.Dispatch<React.SetStateAction<string>>, direction: Direction, views: Views) {
  setDisplayContent(views.find((v) => v.direction === direction)?.description ?? '');
}
