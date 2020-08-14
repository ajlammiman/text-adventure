import { location } from '../content';

const locationContent = require(`./test.location.content.json`);

const description = locationContent.location.description;
const name = locationContent.location.name;

test('location has a name', () => {
  expect(location.name).toBe(name);
});

test('location has a description', () => {
  expect(location.description).toBe(description);
});
