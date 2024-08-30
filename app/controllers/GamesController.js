import {gamesService} from '../services/GamesService.js';

export class GamesController {
  constructor() {}

  checkJumble() {
    event.preventDefault();
    const form = event.target;
    const jumbleElem = form.body.value;
    gamesService.checkJumble(jumbleElem);
  }
}
