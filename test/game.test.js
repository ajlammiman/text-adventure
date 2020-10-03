import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import { Game } from '../game.tsx';

test('game starts at default location', () => {
  render(<Game />);
  expect(screen.getByText(`Welcome to the game!`)).toBeInTheDocument();
});

test('player can ask for help', async () => {
  render(<Game />);
  fireEvent.click(screen.getByText(/help/i));
  expect(await screen.findByText('This is a help message')).toBeInTheDocument();
});
