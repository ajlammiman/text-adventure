import { location } from '../content';

const locationContent = require(`./test.location.content.json`);

test('a location has a name', () => {
  expect(location.name).toBe(locationContent.location.name);
});

test('a location has a description', () => {
  expect(location.description).toBe(locationContent.location.description);
});

test('a location knows what is on its left', () => {
  expect(location.left).toBe(locationContent.location.left);
});

test('a location knows what is on its right', () => {
  expect(location.right).toBe(locationContent.location.right);
});

test('a location knows what is behind it', () => {
  expect(location.behind).toBe(locationContent.location.behind);
});

test('a location knows what is in front of it', () => {
  expect(location.front).toBe(locationContent.location.front);
});
