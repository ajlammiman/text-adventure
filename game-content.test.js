import content from './content.mock.json'

test('a start message to be returned', () => {
    const gameContent = GameContent(content);

    expect(gameContent.start()).toEqual('Welcome to the adventure!');
})


const GameContent = (content) => {
    const start = () => content.start; 
    
    return {
        start
    }
}