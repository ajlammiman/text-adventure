import React from 'react'
import { Content } from './content.service.js'

export const Game = () => {
    const { content } = Content(); 
    return <div>{content}</div>
}
