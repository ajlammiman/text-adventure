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
    right: 'looking right',
    ahead: 'looking right in front of you',
    behind: 'looking right behind of you'
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
  clickButton(/look left/i);
  expect(screen.getByText('looking left')).toBeInTheDocument();
});

test('player can look right', () => {
  render(<Game />);
  clickButton(/look right/i);
  expect(screen.getByText('looking right')).toBeInTheDocument();
});

test('player can look ahead', () => {
  render(<Game />);
  clickButton(/look ahead/i);
  expect(screen.getByText('looking right in front of you')).toBeInTheDocument();
});

test('player can look behind', () => {
  render(<Game />);
  clickButton(/look behind/i);
  expect(screen.getByText('looking right behind of you')).toBeInTheDocument();
});

const clickButton = (text) => userEvent.click(screen.getByRole('button', { name: text }));
