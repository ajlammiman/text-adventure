import React from 'react'
import { ContentService } from './content.service.js'

export const Game = () => {
    const { content, help } = ContentService();
     
    return <>
        <div>{content}</div>
        <div><button title="Help" onClick={() => help()}>Help</button></div>
    </>
}
