import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import { Game } from '../game.tsx';
import { Location } from '../location.ts';
import { Help } from '../help.ts';

const mockStart = 'Welcome to the game!';
const mockHelp = 'This is a help message';
const mockViews = [{ direction: 'Left', description: 'I can see something in the distance' }];
const mockLocationsToMoveTo = [{ direction: 'Ahead', id: 1 }];
const mockLocations = [{ id: 1, description: 'some place' }];

jest.mock('../location');
jest.mock('../help');

Location.mockImplementation(() => {
  return { description: mockStart, views: mockViews, locations: mockLocationsToMoveTo };
});

Help.mockImplementation(() => {
  return mockHelp;
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
  fireEvent.click(screen.getByText(/Look Left/i));
  expect(await screen.findByText(mockViews.find((v) => v.direction === 'Left').description)).toBeInTheDocument();
});

test('player can move in a direction', async () => {
  render(<Game />);
  fireEvent.click(screen.getByText(/Move Ahead/i));
  const id = mockLocationsToMoveTo.find((l) => l.direction === 'Ahead').id;
  expect(await screen.findByText(mockLocations.find((l) => l.id === id).description)).toBeInTheDocument();
});
