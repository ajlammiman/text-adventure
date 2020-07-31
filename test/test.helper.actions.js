import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export const clickButton = (text) => userEvent.click(screen.getByRole('button', { name: text }));
export const checkForText = (text) => expect(screen.getByText(text)).toBeInTheDocument();
