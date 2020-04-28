export const GameContent = (content) => {
    if (!content) 
        throw('content must be supplied.');
    
    const start = () => {
        if (!content.start) 
            throw('content must have a start message.');

        return content.start
    }; 

    const help = () => {
        if (!content.help) 
            throw('content must have a help message.');

        return content.help
    }; 


    return {
        start,
        help
    }
}