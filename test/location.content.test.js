import { location } from '../content';

const locationContent = require(`./test.location.content.json`);

const description = locationContent.location.description;

test('location must have a description', () => {
  expect(location.description).toBe(description);
});
