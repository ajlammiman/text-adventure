import React from 'react'
import ReactDOM from 'react-dom'
import { Game } from './game.jsx'
import content from './content.json'
import {GameContent} from './game.content.js'

const gameContent = GameContent(content);

export const App = () => <><Game gameContent={gameContent} /></>

ReactDOM.render(<App />, document.getElementById('app'));


