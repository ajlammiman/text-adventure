import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Game } from '../game.jsx';

jest.mock('../content', () => ({
  welcome: 'Welcome to the game!'
}));

test('start message', () => {
  const { getByText } = render(<Game />);
  expect(getByText('Welcome to the game!')).toBeInTheDocument();
});
