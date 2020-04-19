import React from 'react'

export const Game = ({contentService}) => {
    const { content } = contentService(); 
    return <div>{content}</div>
}
