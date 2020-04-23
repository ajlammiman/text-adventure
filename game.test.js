import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { Game } from './game.jsx'

test('when game starts message is displayed', () => {
    const {getByText} = render(<Game />);

    expect(getByText('Welcome to the adventure!')).toBeInTheDocument();
});

test('When requesting help the available commands are listed.', () =>{
    const { getByText, getByTitle } = render(<Game />);

    fireEvent.click(getByTitle(`Help`));

    return waitFor(() => {
        expect(getByText('Help is at hand!')).toBeInTheDocument();
    });
});

