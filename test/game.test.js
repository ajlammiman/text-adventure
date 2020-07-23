import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import { Game } from '../game.tsx';

jest.mock('../content', () => ({
  content: { welcome: 'Welcome to the game!', help: 'This is a help message' }
}));

test('when game starts a message appears', () => {
  render(<Game />);
  expect(screen.getByText('Welcome to the game!')).toBeInTheDocument();
});

test('when help is asked for a help message appears', () => {
  render(<Game />);
  const help = screen.getByRole('button', { name: /help/i });
  fireEvent.click(help);
  expect(screen.getByText('This is a help message')).toBeInTheDocument();
});
