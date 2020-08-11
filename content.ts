const contentSource = require(`./content/content.json`);

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
