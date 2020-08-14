const contentSource = require(`./content/content.json`);
const locationSource = require(`./test/test.location.content.json`);

export interface GameContent {
  welcome: string;
  help: string;
  left: string;
  right: string;
  ahead: string;
  behind: string;
  forwards: string;
  backwards: string;
  movingLeft: string;
  movingRight: string;
}

export const content: GameContent = {
  welcome: contentSource.welcome,
  help: contentSource.help,
  left: contentSource.left,
  right: contentSource.right,
  ahead: contentSource.ahead,
  behind: contentSource.behind,
  forwards: contentSource.forwards,
  backwards: contentSource.backwards,
  movingLeft: contentSource.movingLeft,
  movingRight: contentSource.movingRight
};

export interface Location {
  name: string;
  description: string;
  left: string;
  right: string;
  behind: string;
  front: string;
  surroundings: Surroundings;
}

interface Surroundings {
  left: string;
}

export const location: Location = {
  name: locationSource.location.name,
  description: locationSource.location.description,
  left: locationSource.location.left,
  right: locationSource.location.right,
  behind: locationSource.location.behind,
  front: locationSource.location.front,
  surroundings: { left: locationSource.location.left }
};
