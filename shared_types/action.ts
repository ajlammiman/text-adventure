import { Direction } from './direction';

export type ActionButton = {
  setDisplayContent: React.Dispatch<React.SetStateAction<string>>;
  direction: Direction;
};
