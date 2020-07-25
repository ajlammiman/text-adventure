import { content } from '../content';

const contentSource = require(`../content/content.json`);
const welcome = contentSource.welcome;
const helpMessage = contentSource.help;
const leftMessage = contentSource.left;
const rightMessage = contentSource.right;

const welcomeContent = content.welcome;
const helpContent = content.help;
const leftContent = content.left;
const rightContent = content.right;

test('welcome content is available', () => {
  expect(welcomeContent).toBe(welcome);
});

test('help content is available', () => {
  expect(helpContent).toBe(helpMessage);
});

test('looking left content is available', () => {
  expect(leftContent).toBe(leftMessage);
});

test('looking right content is available', () => {
  expect(rightContent).toBe(rightMessage);
});
