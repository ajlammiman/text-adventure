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
  checkForText('Welcome to the game!');
});

test('player can ask for help', () => {
  render(<Game />);
  clickButton(/help/i);
  checkForText('This is a help message');
});

test('player can look left', () => {
  render(<Game />);
  clickButton(/look left/i);
  checkForText('looking left');
});

test('player can look right', () => {
  render(<Game />);
  clickButton(/look right/i);
  checkForText('looking right');
});

test('player can look ahead', () => {
  render(<Game />);
  clickButton(/look ahead/i);
  checkForText('looking right in front of you');
});

test('player can look behind', () => {
  render(<Game />);
  clickButton(/look behind/i);
  checkForText('looking right behind of you');
});

const clickButton = (text) => userEvent.click(screen.getByRole('button', { name: text }));
const checkForText = (text) => expect(screen.getByText(text)).toBeInTheDocument();
