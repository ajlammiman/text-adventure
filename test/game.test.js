import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Game } from '../game.tsx';
import { clickButton, checkForText } from './test.helper.actions.js';

jest.mock('../content', () => ({
  content: {
    welcome: 'Welcome to the game!',
    help: 'This is a help message'
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
