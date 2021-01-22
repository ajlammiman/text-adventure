import React, { useState as useStateMock } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Moving } from '../moving.tsx';

const locationsToMoveTo = [
  { direction: 'Ahead', id: 1 },
  { direction: 'Behind', id: 2 },
  { direction: 'Left', id: 3 },
  { direction: 'Right', id: 3 }
];
const locations = [
  { id: 1, description: 'some place' },
  { id: 2, description: 'another place' },
  { id: 3, description: 'a left place' },
  { id: 4, description: 'a right place' }
];

describe('player can move', () => {
  test('player can move forward', async () => CanIMove('Ahead'));
  test('player can move backwards', async () => CanIMove('Behind'));
  test('player can move left', async () => CanIMove('Left'));
  test('player can move right', async () => CanIMove('Right'));
});

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn()
}));
const setDisplayContent = jest.fn();
const locationLookup = jest.fn((location) => locations.find((l) => l.id === location.id).description);

beforeEach(() => {
  useStateMock.mockImplementation((init) => [init, setDisplayContent]);
  render(
    <Moving setDisplayContent={setDisplayContent} locations={locationsToMoveTo} locationLookup={locationLookup} />
  );
});

async function CanIMove(direction) {
  fireEvent.click(await screen.findByText(`Move ${direction}`));
  const id = locationsToMoveTo.find((l) => l.direction === direction).id;
  expect(setDisplayContent).toHaveBeenCalledWith(locations.find((l) => l.id === id).description);
}
