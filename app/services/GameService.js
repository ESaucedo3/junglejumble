import { AppState } from "../AppState.js"


class Gameservice {
  checkJumble(jumbleElem) {

    const actualJumble = AppState.activeJumble

    if (actualJumble.body == jumbleElem) {

      console.log('you win');

    } else {
      console.log('you lose');

    }

  }

  startTime() {
    const actualJumble = AppState.activeJumble;
    actualJumble.startTime = new Date()
  }

  endGame() {
    const actualJumble = AppState.activeJumble;
    actualJumble.endTime = new Date();
  }


}

export const gameService = new Gameservice()