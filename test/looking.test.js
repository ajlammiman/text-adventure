import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Game } from '../game.tsx';
import { clickButton, checkForText } from './test.helper.actions.js';

jest.mock('../content', () => ({
  content: {
    left: 'looking left',
    right: 'looking right',
    ahead: 'looking right in front of you',
    behind: 'looking right behind of you'
  }
}));

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
