import React, { useState as useStateMock } from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import { Looking } from '../looking.tsx';

const views = [
  { direction: 'Left', description: 'A description of what I can see on my left.' },
  { direction: 'Right', description: 'A description of what I can see on my right.' },
  { direction: 'Forward', description: 'A description of what I can see in front of me.' }
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
    fireEvent.click(await screen.findByText('Left'));
    expect(setDisplayContent).toHaveBeenCalledWith(views.find((v) => v.direction === 'Left').description);
  });

  test('right', async () => {
    fireEvent.click(await screen.findByText('Right'));
    expect(setDisplayContent).toHaveBeenCalledWith(views.find((v) => v.direction === 'Right').description);
  });

  test('forward', async () => {
    fireEvent.click(await screen.findByText('Forward'));
    expect(setDisplayContent).toHaveBeenCalledWith(views.find((v) => v.direction === 'Forward').description);
  });
});
