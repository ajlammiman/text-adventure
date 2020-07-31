const contentSource = require(`./content/content.json`);

export interface GameContent {
  welcome: string;
  help: string;
  left: string;
  right: string;
  ahead: string;
  behind: string;
}

export const content: GameContent = {
  welcome: contentSource.welcome,
  help: contentSource.help,
  left: contentSource.left,
  right: contentSource.right,
  ahead: contentSource.ahead,
  behind: contentSource.behind
};
