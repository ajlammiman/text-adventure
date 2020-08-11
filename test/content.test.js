import { content } from '../content';

const contentSource = require(`../content/content.json`);
const welcome = contentSource.welcome;
const help = contentSource.help;
const left = contentSource.left;
const right = contentSource.right;
const ahead = contentSource.ahead;
const behind = contentSource.behind;
const forwards = contentSource.location.description;
const backwards = contentSource.backwards;
const movingLeft = contentSource.movingLeft;
const movingRight = contentSource.movingRight;

const welcomeContent = content.welcome;
const helpContent = content.help;
const leftContent = content.left;
const rightContent = content.right;
const aheadContent = content.ahead;
const behindContent = content.behind;
const forwardsContent = content.forwards;
const backwardsContent = content.backwards;
const movingLeftContent = content.movingLeft;
const movingRightContent = content.movingRight;

test('welcome content is available', () => {
  expect(welcomeContent).toBe(welcome);
});

test('help content is available', () => {
  expect(helpContent).toBe(help);
});

test('looking left content is available', () => {
  expect(leftContent).toBe(left);
});

test('looking right content is available', () => {
  expect(rightContent).toBe(right);
});

test('looking ahead content is available', () => {
  expect(aheadContent).toBe(ahead);
});

test('looking behind content is available', () => {
  expect(behindContent).toBe(behind);
});

test('moving forwards content is available', () => {
  expect(forwardsContent).toBe(forwards);
});

test('moving backwards content is available', () => {
  expect(backwardsContent).toBe(backwards);
});

test('moving left content is available', () => {
  expect(movingLeftContent).toBe(movingLeft);
});

test('moving right content is available', () => {
  expect(movingRightContent).toBe(movingRight);
});
