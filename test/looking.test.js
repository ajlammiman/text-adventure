import React, { useState as useStateMock } from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import { Looking } from '../looking.tsx';

const views = [
  { direction: 'Left', description: 'A description of what I can see on my left.' },
  { direction: 'Right', description: 'A description of what I can see on my right.' },
  { direction: 'Ahead', description: 'A description of what I can see in front of me.' },
  { direction: 'Behind', description: 'A description of what I can see behind me.' }
];

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn()
}));
const setDisplayContent = jest.fn();

beforeEach(() => {
  useStateMock.mockImplementation((init) => [init, setDisplayContent]);
  render(<Looking setDisplayContent={setDisplayContent} views={views} />);
});

describe('player can look', () => {
  test('Look left', async () => await CanISee('Left'));
  test('Look right', async () => await CanISee('Right'));
  test('Look ahead', async () => await CanISee('Ahead'));
  test('Look behind', async () => await CanISee('Behind'));
});

async function CanISee(direction) {
  fireEvent.click(await screen.findByText(`Look ${direction}`));
  expect(setDisplayContent).toHaveBeenCalledWith(views.find((v) => v.direction === direction).description);
}
