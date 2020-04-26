import content from './content.mock.json'
test('content must be supplied', () => {
    expect(GameContent).toThrow('content must be supplied.')
})

test('a start message to be returned', () => {
    const gameContent = GameContent(content);

    expect(gameContent.start()).toEqual('Welcome to the adventure!');
})

test('a start message must be included', () => {
    expect(GameContent({start:""}).start).toThrow('content must have a start message.')
})


const GameContent = (content) => {
    if (!content) 
        throw('content must be supplied.');
    
    const start = () => {
        if (!content.start) 
            throw('content must have a start message.');

        return content.start
    }; 
    
    return {
        start
    }
}