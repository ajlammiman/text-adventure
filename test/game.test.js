import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import { Game } from '../game.tsx';
import { Location } from '../content.ts';

const mockStartLocation = '694450893FFF4562A227C2EDA5DA7696';
const mockStart = 'Welcome to the game!';
const mockHelp = 'This is a help message';
const mockViews = [{ direction: 'Left', description: 'I can see something in the distance' }];

jest.mock('../content');

Location.mockImplementation(() => {
  return {
    start: mockStartLocation,
    help: mockHelp,
    views: mockViews,
    location: { description: mockStart }
  };
});

test('game starts at default location', () => {
  render(<Game />);
  expect(screen.getByText(mockStart)).toBeInTheDocument();
});

test('player can ask for help', async () => {
  render(<Game />);
  fireEvent.click(screen.getByText(/help/i));
  expect(await screen.findByText(mockHelp)).toBeInTheDocument();
});

test('player can look in a direction', async () => {
  render(<Game />);
  fireEvent.click(screen.getByText(/Left/i));
  expect(await screen.findByText(mockViews.find((v) => v.direction === 'Left').description)).toBeInTheDocument();
});
