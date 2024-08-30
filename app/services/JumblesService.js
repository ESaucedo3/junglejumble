import {AppState} from '../AppState.js';
import {gamesService} from './GamesService.js';

class JumblesService {
  setActiveJumble(jumbleId) {
    const actualJumbles = AppState.jumbles;
    const actualJumble = actualJumbles.find((jumble) => jumble.id === jumbleId);
    AppState.activeJumble = actualJumble;
    gamesService.startGame();
  }
}

export const jumblesService = new JumblesService();
