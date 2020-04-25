import { useState } from "react";

export const useGame = (gameContent) => {
    const [ content, setContent ] = useState(gameContent.start);

    const help = () => setContent(gameContent.help);

    return {
        content,
        help
    };
}
