import { useState } from "react";

export const ContentService = () => {
    const [ content, setContent ] = useState(`Welcome to the adventure!`);

    return {
        content,
        setContent
    };
}
