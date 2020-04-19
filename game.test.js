import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { Game } from './game.jsx'

test('when game starts message is displayed', () => {
    const {getByText} = render(<Game/>);

    expect(getByText('Welcome to the adventure!')).toBeInTheDocument();
});

