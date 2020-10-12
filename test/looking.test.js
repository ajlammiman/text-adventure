import React, { useState as useStateMock } from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import { Looking } from '../looking.tsx';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn()
}));

describe('player can look', () => {
  const setDisplayContent = jest.fn();

  beforeEach(() => {
    useStateMock.mockImplementation((init) => [init, setDisplayContent]);
  });

  test('left', async () => {
    render(<Looking setDisplayContent={setDisplayContent} />);
    fireEvent.click(await screen.findByText('Left'));
    expect(setDisplayContent).toHaveBeenCalledWith('A description of what I can see on my left');
  });

  test('right', async () => {
    render(<Looking setDisplayContent={setDisplayContent} />);
    fireEvent.click(await screen.findByText('Right'));
    expect(setDisplayContent).toHaveBeenCalledWith('A description of what I can see on my right');
  });
});
