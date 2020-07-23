import { content } from '../content';

const contentSource = require(`../content/content.json`);
const welcome = contentSource.welcome;
const welcomeContent = content.welcome;

test('welcome content is available', () => {
  expect(welcomeContent).toBe(welcome);
});
