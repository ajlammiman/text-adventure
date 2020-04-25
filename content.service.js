import { useState } from "react";

export const ContentService = () => {
    const [ content, setContent ] = useState(`Welcome to the adventure!`);

    const help = () => setContent(`Help is at hand!`);

    return {
        content,
        setContent,
        help
    };
}
