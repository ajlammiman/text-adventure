import React from 'react'
import ReactDOM from 'react-dom'
import { Game } from './game.jsx'
import { ContentService } from './content.service.js'

export const App = () => <><Game contentService={ContentService} /></>

ReactDOM.render(<App />, document.getElementById('app'));