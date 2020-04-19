import React from 'react'
import { Content } from './game.js'

export const Game = () => {
    const { content } = Content(); 
    return <div>{content}</div>
}
