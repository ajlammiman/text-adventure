import content from './content.mock.json'
test('content must be supplied', () => {
    expect(GameContent).toThrow('content must be supplied.')
})

test('a start message to be returned', () => {
    const gameContent = GameContent(content);

    expect(gameContent.start()).toEqual('Welcome to the adventure!');
})


const GameContent = (content) => {
    if (!content) 
            throw('content must be supplied.');
    
    const start = () => content.start; 
    
    return {
        start
    }
}