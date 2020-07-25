const contentSource = require(`./content/content.json`);

interface gameContent {
  welcome: string;
  help: string;
  left: string;
  right: string;
  ahead: string;
}

export const content: gameContent = {
  welcome: contentSource.welcome,
  help: contentSource.help,
  left: contentSource.left,
  right: contentSource.right,
  ahead: contentSource.ahead
};
