import { useState } from "react";

export const ContentService = () => {
    const [ content, setContent ] = useState(gameContent.start);

    const help = () => setContent(gameContent.help);

    return {
        content,
        setContent,
        help
    };
}

const gameContent = {
    start : `Welcome to the adventure!`,
    help : `Help is at hand!`
}