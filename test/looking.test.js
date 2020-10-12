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

describe('player can look', () => {
  const setDisplayContent = jest.fn();

  beforeEach(() => {
    useStateMock.mockImplementation((init) => [init, setDisplayContent]);
    render(<Looking setDisplayContent={setDisplayContent} views={views} />);
  });

  test('left', async () => {
    await CanISee('Left');
  });

  test('right', async () => {
    fireEvent.click(await screen.findByText('Right'));
    expect(setDisplayContent).toHaveBeenCalledWith(views.find((v) => v.direction === 'Right').description);
  });

  test('ahead', async () => {
    fireEvent.click(await screen.findByText('Ahead'));
    expect(setDisplayContent).toHaveBeenCalledWith(views.find((v) => v.direction === 'Ahead').description);
  });

  test('behind', async () => {
    fireEvent.click(await screen.findByText('Behind'));
    expect(setDisplayContent).toHaveBeenCalledWith(views.find((v) => v.direction === 'Behind').description);
  });

  async function CanISee(direction) {
    fireEvent.click(await screen.findByText(direction));
    expect(setDisplayContent).toHaveBeenCalledWith(views.find((v) => v.direction === direction).description);
  }
});
