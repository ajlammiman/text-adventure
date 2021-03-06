import React from 'react';
import ReactDOM from 'react-dom';
import { Game } from './game.tsx';

export const App = () => <Game />;

ReactDOM.render(<App />, document.getElementById('app'));
