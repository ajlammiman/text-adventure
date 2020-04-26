import content from './content.mock.json'
test('content must be supplied', () => {
    expect(GameContent).toThrow('content must be supplied.')
})

test('a start message to be returned', () => {
    const gameContent = GameContent(content);

    expect(gameContent.start()).toEqual('Welcome to the adventure!');
})

test('a start message must be included', () => {
    expect(GameContent({start:"",help:"foo"}).start).toThrow('content must have a start message.')
})

test('a help message to be returned', () => {
    const gameContent = GameContent(content);

    expect(gameContent.help()).toEqual('Help is at hand!');
})

test('a help message must be included', () => {
    expect(GameContent({start:"foo",help:""}).help).toThrow('content must have a help message.')
})


const GameContent = (content) => {
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