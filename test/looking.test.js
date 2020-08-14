import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Game } from '../game.tsx';
import { clickButton, checkForText } from './test.helper.actions.js';

jest.mock('../content', () => ({
  content: {
    welcome: 'Hello!',
    help: 'help'
  },

  location: {
    name: 'home',
    description: 'is where the heart is',
    surroundings: {
      left: 'left location',
      right: 'right location',
      behind: 'behind you!',
      front: 'to the front'
    }
  }
}));

test('player can look left', () => {
  render(<Game />);
  clickButton(/look left/i);
  checkForText('left location');
});

test('player can look right', () => {
  render(<Game />);
  clickButton(/look right/i);
  checkForText('right location');
});

test('player can look ahead', () => {
  render(<Game />);
  clickButton(/look ahead/i);
  checkForText('to the front');
});

test('player can look behind', () => {
  render(<Game />);
  clickButton(/look behind/i);
  checkForText('behind you!');
});
