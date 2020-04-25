import React from 'react'
import { ContentService } from './content.service.js'

export const Game = () => {
    const { content, setContent } = ContentService();
     
    return <>
        <div>{content}</div>
        <div><button title="Help" onClick={() => setContent(`Help is at hand!`)}>Help</button></div>
    </>
}
