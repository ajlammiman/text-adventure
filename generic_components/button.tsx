import React from 'react';

type DefaultButtonProps = Omit<JSX.IntrinsicElements['button'], 'onClick'>;
interface ExtendedButtonProps {
  name: string;
  content: string;
  updateState: React.Dispatch<React.SetStateAction<string>>;
}

type ButtonProps = ExtendedButtonProps & DefaultButtonProps;

export function Button({ name, content, updateState, ...allButtonProps }: ButtonProps) {
  return (
    <button onClick={() => updateState(content)} {...allButtonProps}>
      {name}
    </button>
  );
}
