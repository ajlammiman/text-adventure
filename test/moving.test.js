import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Game } from '../game.tsx';
import { clickButton, checkForText } from './test.helper.actions.js';

jest.mock('../content', () => ({
  content: {
    forwards: 'you have moved forward',
    backwards: 'you have moved backwards',
    movingLeft: 'you have moved left',
    movingRight: 'you have moved right'
  }
}));

test('player can move forwards', () => {
  render(<Game />);
  clickButton(/Move Forward/i);
  checkForText('you have moved forward');
});

test('player can move backwards', () => {
  render(<Game />);
  clickButton(/Move Backwards/i);
  checkForText('you have moved backwards');
});

test('player can move left', () => {
  render(<Game />);
  clickButton(/Move Left/i);
  checkForText('you have moved left');
});

test('player can move right', () => {
  render(<Game />);
  clickButton(/Move Right/i);
  checkForText('you have moved right');
});
