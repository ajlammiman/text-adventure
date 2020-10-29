import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import { Game } from '../game.tsx';
import { content } from '../content.ts';

const mockViews = [{ direction: 'Left', description: 'I can see something in the distance' }];
jest.mock('../content');
content.mockImplementation(() => {
  return { Views: mockViews };
});

test('game starts at default location', () => {
  render(<Game />);
  expect(screen.getByText(`Welcome to the game!`)).toBeInTheDocument();
});

test('player can ask for help', async () => {
  render(<Game />);
  fireEvent.click(screen.getByText(/help/i));
  expect(await screen.findByText('This is a help message')).toBeInTheDocument();
});

test('player can look in a direction', async () => {
  render(<Game />);
  fireEvent.click(screen.getByText(/Left/i));
  expect(await screen.findByText(mockViews.find((v) => v.direction === 'Left').description)).toBeInTheDocument();
});
