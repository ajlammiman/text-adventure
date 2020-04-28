import content from './content.mock.json'
import {GameContent} from './game.content.js'

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


