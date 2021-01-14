import React, { useState as useStateMock } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Moving } from '../moving.tsx';

const locations = [{ direction: 'Ahead', id: 1 }];
const location = { id: 1, description: 'some place' };

describe('player can move', () => {
  test('player can move forward', async () => CanIMove('Ahead'));
});

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn()
}));
const setDisplayContent = jest.fn();

beforeEach(() => {
  useStateMock.mockImplementation((init) => [init, setDisplayContent]);
  render(<Moving setDisplayContent={setDisplayContent} locations={locations} direction={'Ahead'} />);
});

async function CanIMove(direction) {
  fireEvent.click(await screen.findByText(direction));
  expect(setDisplayContent).toHaveBeenCalledWith(location.description);
}
