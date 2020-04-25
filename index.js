import React from 'react'
import ReactDOM from 'react-dom'
import { Game } from './game.jsx'
import content from './content.json'

export const App = () => <><Game gameContent={content} /></>

ReactDOM.render(<App />, document.getElementById('app'));


