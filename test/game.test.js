import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
  userEvent.click(screen.getByRole('button', { name: /help/i }));
  expect(screen.getByText('This is a help message')).toBeInTheDocument();
});
