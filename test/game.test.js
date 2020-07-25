import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Game } from '../game.tsx';

jest.mock('../content', () => ({
  content: {
    welcome: 'Welcome to the game!',
    help: 'This is a help message',
    left: 'looking left',
    right: 'looking right'
  }
}));

test('when game starts player is welcomed', () => {
  render(<Game />);
  expect(screen.getByText('Welcome to the game!')).toBeInTheDocument();
});

test('player can ask for help', () => {
  render(<Game />);
  userEvent.click(screen.getByRole('button', { name: /help/i }));
  expect(screen.getByText('This is a help message')).toBeInTheDocument();
});

test('player can look left', () => {
  render(<Game />);
  userEvent.click(screen.getByRole('button', { name: /look left/i }));
  expect(screen.getByText('looking left')).toBeInTheDocument();
});

test('player can look right', () => {
  render(<Game />);
  userEvent.click(screen.getByRole('button', { name: /look right/i }));
  expect(screen.getByText('looking right')).toBeInTheDocument();
});
