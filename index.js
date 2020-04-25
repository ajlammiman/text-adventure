import React from 'react'
import ReactDOM from 'react-dom'
import { Game } from './game.jsx'

const gameContent = {
    start : `Welcome to the adventure!`,
    help : `Help is at hand!`
}

export const App = () => <><Game gameContent={gameContent} /></>

ReactDOM.render(<App />, document.getElementById('app'));


