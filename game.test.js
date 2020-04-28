import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { Game } from './game.jsx'
import content from './content.mock.json'
import {GameContent} from './game.content.js'

test('when game starts message is displayed', () => {
    const {getByText} = render(<Game gameContent={GameContent(content)} />);

    expect(getByText('Welcome to the adventure!')).toBeInTheDocument();
});

test('When requesting help the available commands are listed.', () =>{
    const { getByText, getByTitle } = render(<Game gameContent={GameContent(content)} />);

    fireEvent.click(getByTitle(`Help`));

    return waitFor(() => {
        expect(getByText('Help is at hand!')).toBeInTheDocument();
    });
});

const gameContent = {
    start : `Welcome to the adventure!`,
    help : `Help is at hand!`
}

