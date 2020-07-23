const contentSource = require(`./content/content.json`);

interface gameContent {
  welcome: string;
}

export const content: gameContent = {
  welcome: contentSource.welcome
};
