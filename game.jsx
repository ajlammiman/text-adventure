import React from 'react'
import { ContentService } from './content.service.js'

export const Game = ({gameContent}) => {
    const { content, help } = ContentService(gameContent);
     
    return <>
        <div>{content}</div>
        <div><button title="Help" onClick={() => help()}>Help</button></div>
    </>
}


