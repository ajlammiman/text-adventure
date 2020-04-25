import React from 'react'
import { useGame } from './game.js'

export const Game = ({contentService}) => {
    const { content, help } = useGame(contentService);
     
    return <>
        <div>{content}</div>
        <div><button title="Help" onClick={() => help()}>Help</button></div>
    </>
}


