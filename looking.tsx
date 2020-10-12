import React from 'react';

type Direction = 'Left' | 'Right' | 'Ahead' | 'Behind';

type View = {
  direction: Direction;
  description: string;
};

type Views = View[];

type DefaultButtonProps = Omit<JSX.IntrinsicElements['button'], 'onClick'>;
interface ExtendedButtonProps {
  name: string;
  content: string;
  updateState: React.Dispatch<React.SetStateAction<string>>;
}

type ButtonProps = ExtendedButtonProps & DefaultButtonProps;

function Button({ name, content, updateState, ...allButtonProps }: ButtonProps) {
  return (
    <button onClick={() => updateState(content)} {...allButtonProps}>
      {name}
    </button>
  );
}

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
