import { AppState } from "../AppState.js";

class JumblesService {
  setActiveJumble(jumbleId) {
    const actualJumbles = AppState.jumbles;
    const actualJumble = actualJumbles.find(jumble => jumble.id === jumbleId);
    AppState.activeJumble = actualJumble;
  }

}

export const jumblesService = new JumblesService();