import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { ContentService } from './content.service.mock.js'
import { Game } from './game.jsx'

test('when game starts message is displayed', () => {
    const {getByText} = render(<Game contentService={ContentService} />);

    expect(getByText('Welcome to the adventure!')).toBeInTheDocument();
});

