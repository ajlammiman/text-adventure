import React from 'react'
import { useGame } from './game.js'

export const Game = ({gameContent}) => {
    const { content, help } = useGame(gameContent);
     
    return <>
        <div>{content}</div>
        <div><button title="Help" onClick={() => help()}>Help</button></div>
    </>
}


