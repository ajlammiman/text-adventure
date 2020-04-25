import { useState } from "react";

export const useGame = (contentService) => {
    const [ content, setContent ] = useState(contentService.start);

    const help = () => setContent(contentService.help);

    return {
        content,
        help
    };
}
