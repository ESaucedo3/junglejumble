import {AppState} from '../AppState.js';

class GamesService {
  checkJumble(jumbleElem) {
    const actualJumble = AppState.activeJumble;

    if (actualJumble.body === jumbleElem) {
      console.log('you win');
      this.endGame();
    } else {
      console.log('you lose');
      this.endGame();
    }
  }

  startGame() {
    const actualJumble = AppState.activeJumble;
    actualJumble.startTime = new Date().getTime();
    actualJumble.intervalId = setInterval(this.timer, 1000, actualJumble);
  }

  endGame() {
    const actualJumble = AppState.activeJumble;
    actualJumble.endTime = new Date().getTime();
    console.log('Time ended');

    const totalTime = actualJumble.endTime - actualJumble.startTime;
    if (!actualJumble.fastestTime || totalTime < actualJumble.fastestTime) {
      actualJumble.fastestTime = totalTime;
    }

    console.log(actualJumble.startTime);
    console.log(actualJumble.fastestTime);
    console.log(actualJumble.endTime);

    clearInterval(actualJumble.intervalId);
  }

  timer(actualJumble) {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - actualJumble.startTime;
    console.log(`Elapsed time: ${Math.floor(elapsedTime / 1000)} seconds`);
  }
}

export const gamesService = new GamesService();
