import { content } from '../content';

const contentSource = require(`../content/content.json`);
const welcome = contentSource.welcome;
const helpMessage = contentSource.help;
const leftMessage = contentSource.left;

const welcomeContent = content.welcome;
const helpContent = content.help;
const leftContent = content.left;

test('welcome content is available', () => {
  expect(welcomeContent).toBe(welcome);
});

test('help content is available', () => {
  expect(helpContent).toBe(helpMessage);
});

test('looking left content is available', () => {
  expect(leftContent).toBe(leftMessage);
});
