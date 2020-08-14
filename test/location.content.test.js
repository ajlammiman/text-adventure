import { location } from '../content';

const locationContent = require(`./test.location.content.json`);

test('a location has a name', () => {
  expect(location.name).toBe(locationContent.location.name);
});

test('a location has a description', () => {
  expect(location.description).toBe(locationContent.location.description);
});

test('a location knows what is on its left', () => {
  expect(location.surroundings.left).toBe(locationContent.location.surroundings.left);
});

test('a location knows what is on its right', () => {
  expect(location.surroundings.right).toBe(locationContent.location.surroundings.right);
});

test('a location knows what is behind it', () => {
  expect(location.surroundings.behind).toBe(locationContent.location.surroundings.behind);
});

test('a location knows what is in front of it', () => {
  expect(location.surroundings.front).toBe(locationContent.location.surroundings.front);
});
